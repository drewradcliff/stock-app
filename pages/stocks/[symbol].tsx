import { Container } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailView from "../../components/DetailView";
import DetailHeader from "../../components/DetailHeader";
import { History } from "../../types";
import { fetcher } from "../../util";

const Stock: NextPage = () => {
  const router = useRouter();
  const { symbol } = router.query;
  const { data } = useSWR<History[]>("/api/history/" + symbol, fetcher);

  return (
    <Container>
      <DetailHeader symbol={symbol as string} />
      <DetailView data={data} />
    </Container>
  );
};

export default Stock;
