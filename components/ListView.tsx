import { Button, Table } from "@mantine/core";
import { useRouter } from "next/router";
import { Stock } from "../types";

type Props = {
  data: undefined | Stock[];
  setDeleteSymbolModal: (modal: boolean) => void;
};

export default function ListView({ data, setDeleteSymbolModal }: Props) {
  const router = useRouter();
  const handleClick = (symbol: string) => {
    router.push("/stocks/" + symbol);
  };

  return (
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
  );
}
