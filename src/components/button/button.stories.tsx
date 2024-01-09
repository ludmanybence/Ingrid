import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Default</Button>,
};

export const Primary: Story = {
  render: (args) => (
    <Button {...args} variant="primary">
      Primary
    </Button>
  ),
};

export const Danger: Story = {
  render: (args) => (
    <Button {...args} variant="danger">
      Danger
    </Button>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Button {...args} variant="warning">
      Warning
    </Button>
  ),
};
