import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { SampleTable } from "@/components/SampleTable/SampleTable";
import { Text, Title } from "@mantine/core";
import axios from 'axios';

const UsersPage = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
  const { data: users, success } = res.data;

  if (!success) {
    // todo
  }

  return (
    <>
      <Title>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'hotpink', to: 'fuchsia' }}>
          Users List
        </Text>
      </Title>
      <SampleTable elements={users} />
      <ColorSchemeToggle />
    </>
  );
};

export default UsersPage;
