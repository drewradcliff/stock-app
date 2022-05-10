import { Container, Table, Title } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import { History } from "../../types";
import { fetcher } from "../../util";

const Stock: NextPage = () => {
  const router = useRouter();
  const { symbol } = router.query;
  const { data, error } = useSWR<History[]>("/api/history/" + symbol, fetcher);

  if (!data && !error) return <>Loading...</>;

  return (
    <Container>
      <Title>{symbol}</Title>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.open}</td>
              <td>{item.high}</td>
              <td>{item.low}</td>
              <td>{item.close}</td>
              <td>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Stock;
