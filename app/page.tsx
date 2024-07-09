'use client'

import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ScrollArea } from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';

export default function HomePage() {
  const { height } = useViewportSize();

  return (
    <ScrollArea
      h={{ base: height - 100, md: height - 110, lg: height - 120 }}
    >
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <ColorSchemeToggle />
    </ScrollArea>
  );
}
