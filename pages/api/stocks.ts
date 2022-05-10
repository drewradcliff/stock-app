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
  ]);
}
