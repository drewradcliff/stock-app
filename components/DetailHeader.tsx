import { Button, Group, Title } from "@mantine/core";
import Link from "next/link";

type Props = {
  symbol: string;
};

export default function DetailHeader({ symbol }: Props) {
  return (
    <Group my="xl">
      <Link href="/home" passHref>
        <Button component="a" variant="default">
          Back
        </Button>
      </Link>
      <Title>{symbol}</Title>
    </Group>
  );
}
