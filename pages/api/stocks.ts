import type { NextApiRequest, NextApiResponse } from "next";
import type { Stock } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stock[]>
) {
  res.status(200).json([
    {
      id: 1,
      symbol: "AAPL",
      name: "Apple Inc. Common Stock",
      marketCap: "2,664,402,411,200",
    },
    {
      id: 2,
      symbol: "MSFT",
      name: "Microsoft Corporation Common Stock",
      marketCap: "2,041,776,045,855",
    },
    {
      id: 3,
      symbol: "GOOG",
      name: "Alphabet Inc. Class C Capital Stock",
      marketCap: "1,524,302,100,278",
    },
    {
      id: 4,
      symbol: "AMZN",
      name: "Amazon.com, Inc. Common Stock",
      marketCap: "1,116,091,885,059",
    },
    {
      id: 5,
      symbol: "TSLA",
      name: "Tesla, Inc. Common Stock",
      marketCap: "840,918,896,023",
    },
  ]);
}
