import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Flex, Text, Title } from '@mantine/core';

export const Header = () => {
  return (
    <>
      <Title>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'hotpink', to: 'fuchsia' }}
        >
          Recipe Manager
        </Text>
      </Title>
      <Flex justify="flex-end" style={{ flexGrow: 1 }}>
        <ColorSchemeToggle />
      </Flex>
    </>
  );
};
