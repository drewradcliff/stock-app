import { Table } from "@mantine/core";
import { History } from "../types";

type Props = {
  data: History[] | undefined;
};

export default function DetailView({ data }: Props) {
  return (
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
  );
}
