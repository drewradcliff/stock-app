import { useRouter } from "next/router";
import { Title, Container, TextInput, Button } from "@mantine/core";
import type { NextPage } from "next";

const Login: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <Container size="xs">
      <Title order={1}>Login</Title>
      <form onSubmit={handleSubmit}>
        <TextInput type="email" placeholder="Enter email" />
        <TextInput type="password" placeholder="Enter password" />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Login;
