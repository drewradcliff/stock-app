import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Title, Table } from "@mantine/core";
import useSWR from "swr";
import { Stock } from "../types";
import { fetcher } from "../util";

const Home: NextPage = () => {
  const { data } = useSWR<Stock[]>("/api/stocks", fetcher);
  const router = useRouter();

  const handleClick = (symbol: string) => {
    router.push("/stocks/" + symbol);
  };

  return (
    <Container>
      <Title>Stock App</Title>
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
    </Container>
  );
};

export default Home;
