import { NextPage } from "next";
import { Container, Title, Button, Group } from "@mantine/core";
import useSWR from "swr";
import { Stock } from "../types";
import { fetcher } from "../util";
import { useState } from "react";
import AddSymbolModal from "../components/AddSymbolModal";
import DeleteSymbolModal from "../components/DeleteSymbolModal";
import ListView from "../components/ListView";

const Home: NextPage = () => {
  const { data } = useSWR<Stock[]>("/api/stocks", fetcher);
  const [addSymbolModal, setAddSymbolModal] = useState(false);
  const [deleteSymbolModal, setDeleteSymbolModal] = useState(false);

  return (
    <Container>
      <Group position="apart" my="xl">
        <Title>Stock App</Title>
        <Button onClick={() => setAddSymbolModal(true)} variant="default">
          Add new symbol
        </Button>
      </Group>
      <ListView data={data} setDeleteSymbolModal={setDeleteSymbolModal} />
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
