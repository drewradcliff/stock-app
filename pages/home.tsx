import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Title, Table, Button, Group } from "@mantine/core";
import useSWR from "swr";
import { Stock } from "../types";
import { fetcher } from "../util";
import { useState } from "react";
import AddSymbolModal from "../components/AddSymbolModal";
import DeleteSymbolModal from "../components/DeleteSymbolModal";

const Home: NextPage = () => {
  const { data } = useSWR<Stock[]>("/api/stocks", fetcher);
  const router = useRouter();
  const [addSymbolModal, setAddSymbolModal] = useState(false);
  const [deleteSymbolModal, setDeleteSymbolModal] = useState(false);

  const handleClick = (symbol: string) => {
    router.push("/stocks/" + symbol);
  };

  return (
    <Container>
      <Group position="apart">
        <Title>Stock App</Title>
        <Button onClick={() => setAddSymbolModal(true)} variant="default">
          Add new symbol
        </Button>
      </Group>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Market Cap</th>
            <th></th>
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
              <td>
                <Button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    setDeleteSymbolModal(true);
                  }}
                  variant="subtle"
                  color="red"
                  styles={() => ({
                    root: {
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                  })}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddSymbolModal
        modal={addSymbolModal}
        setModal={setAddSymbolModal}
        data={data}
      />
      <DeleteSymbolModal
        modal={deleteSymbolModal}
        setModal={setDeleteSymbolModal}
      />
    </Container>
  );
};

export default Home;
