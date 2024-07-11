'use client';

import { Button, Group, GroupProps, useMantineColorScheme } from '@mantine/core';

export const ColorSchemeToggle: React.FC<GroupProps> = () => {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
};
