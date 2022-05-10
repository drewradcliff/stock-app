import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Title, Table, Modal, Button, Group } from "@mantine/core";
import useSWR from "swr";
import { Stock } from "../types";
import { fetcher } from "../util";
import { useState } from "react";
import AddSymbolModal from "../components/AddSymbolModal";

const Home: NextPage = () => {
  const { data } = useSWR<Stock[]>("/api/stocks", fetcher);
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const handleClick = (symbol: string) => {
    router.push("/stocks/" + symbol);
  };

  return (
    <Container>
      <Group position="apart">
        <Title>Stock App</Title>
        <Button onClick={() => setModal(true)} variant="default">
          Add new symbol
        </Button>
      </Group>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((stock) => (
            <tr
              key={stock.id}
              onClick={() => handleClick(stock.symbol)}
              style={{ cursor: "pointer" }}
            >
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddSymbolModal modal={modal} setModal={setModal} data={data} />
    </Container>
  );
};

export default Home;
