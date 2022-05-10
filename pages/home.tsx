import { NextPage } from "next";
import { Container, Title, Table } from "@mantine/core";
import useSWR from "swr";
import { Stock } from "../types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data } = useSWR<Stock[]>("/api/stocks", fetcher);

  console.log(data);

  return (
    <Container>
      <Title>Stock App</Title>
      <Table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((stock) => (
            <tr key={stock.id}>
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
