import type { Meta, StoryObj } from '@storybook/react';

import { SampleTable } from './SampleTable';

const meta = {
  component: SampleTable,
} satisfies Meta<typeof SampleTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
