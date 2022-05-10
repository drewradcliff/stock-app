import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { mutate } from "swr";
import { Stock } from "../types";

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  data: Stock[] | undefined;
};

export default function AddSymbolModal({ modal, setModal, data }: Props) {
  const form = useForm({
    initialValues: {
      symbol: "",
      name: "",
    },
    validate: {
      symbol: (value) =>
        data?.some((item) => item.symbol === value.toUpperCase())
          ? "Symbol already exists"
          : null,
    },
  });

  return (
    <Modal
      opened={modal}
      onClose={() => setModal(false)}
      title="Add new symbol"
    >
      <form
        onSubmit={form.onSubmit(() => {
          // This is where we query our DB to add a new stock
          // We use the mutate function to revalidate the data to fetch fresh data
          // This will not update the UI because we are using static data from our API
          mutate("/api/stocks");
          setModal(false);
          showNotification({
            title: "Success",
            message: "Successfully added stock",
            color: "green",
          });
        })}
      >
        <TextInput
          required
          label="Symbol"
          placeholder="AAPL"
          {...form.getInputProps("symbol")}
        />
        <TextInput
          label="Name"
          placeholder="Apple"
          {...form.getInputProps("name")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Modal>
  );
}
