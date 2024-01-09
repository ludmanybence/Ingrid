import ErrorMessage from "./error-message";

import type { Meta, StoryObj } from "@storybook/react";

type Props = React.ComponentProps<typeof ErrorMessage>;

const props: Props = {
  error:
    "Access Restricted - Your current Subscription Plan does not support HTTPS Encryption.",
};
const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
  args: { ...props },
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const HasError: Story = {
  args: { ...props },
};
