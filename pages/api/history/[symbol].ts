import type { NextApiRequest, NextApiResponse } from "next";
import type { History } from "../../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<History[]>
) {
  res.status(200).json([
    {
      id: 1,
      date: "May 10, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 2,
      date: "May 09, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 3,
      date: "May 06, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 4,
      date: "May 05, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 5,
      date: "May 04, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 6,
      date: "May 03, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 7,
      date: "May 02, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 8,
      date: "Apr 29, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 9,
      date: "Apr 28, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
    {
      id: 10,
      date: "Apr 27, 2022",
      open: "155.52",
      high: "156.54",
      low: "153.04",
      close: "153.83",
      volume: "51,666,827",
    },
  ]);
}
