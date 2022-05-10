import { Button, Group, Modal } from "@mantine/core";
import { mutate } from "swr";

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export default function DeleteSymbolModal({ modal, setModal }: Props) {
  return (
    <Modal
      closeButtonLabel="false"
      opened={modal}
      onClose={() => setModal(false)}
      title="Delete stock?"
    >
      <Group>
        <Button
          color="red"
          onClick={() => {
            // This is where we query our DB to delete a stock
            // We use the mutate function to revalidate the data to fetch fresh data
            // This will not update the UI because we are using static data from our API
            mutate("/api/stocks");
            setModal(false);
          }}
        >
          Delete
        </Button>
        <Button variant="default" onClick={() => setModal(false)}>
          Cancel
        </Button>
      </Group>
    </Modal>
  );
}
