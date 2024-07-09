"use client"

import { AppShell, Burger, Group, Skeleton, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title>
            <Text inherit variant="gradient" component="span" gradient={{ from: 'hotpink', to: 'fuchsia' }}>
              Recipe Manager
            </Text>
          </Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Recipe Types
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}