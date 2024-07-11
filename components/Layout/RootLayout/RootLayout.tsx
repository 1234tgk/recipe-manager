'use client';

import { AppShell, Burger, Flex, Group, ScrollArea, Skeleton, Text, Title } from '@mantine/core';
import { useDisclosure, useViewportSize } from '@mantine/hooks';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const { height } = useViewportSize();

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
          <Flex w="100%">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Header />
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Recipe Types
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <ScrollArea h={{ base: height - 100, md: height - 110, lg: height - 120 }}>
          {children}
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
