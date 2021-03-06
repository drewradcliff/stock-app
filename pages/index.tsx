import { useRouter } from "next/router";
import { Title, Container, TextInput, Button, Stack } from "@mantine/core";
import type { NextPage } from "next";

const Login: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <Container size="xs" mt="xl">
      <form onSubmit={handleSubmit}>
        <Stack>
          <Title order={1}>Login</Title>
          <TextInput required type="email" placeholder="Enter email" />
          <TextInput required type="password" placeholder="Enter password" />
          <Button type="submit" variant="default">
            Login
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Login;
