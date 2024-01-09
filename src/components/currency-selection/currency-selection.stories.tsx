import CurrencySelection from "./currency-selection";

import type { Meta, StoryObj } from "@storybook/react";

type Props = React.ComponentProps<typeof CurrencySelection>;

const props: Props = {
  selectedCurrency: "SEK",
  changeSelectedCurrency: (arg: typeof props.selectedCurrency) => {
    props.selectedCurrency = arg;
  },
};
const meta: Meta<typeof CurrencySelection> = {
  component: CurrencySelection,
  args: { ...props },
};

export default meta;
type Story = StoryObj<typeof CurrencySelection>;

export const Default: Story = {
  args: {
    ...props,
    changeSelectedCurrency: (arg: typeof props.selectedCurrency) => {
      props.selectedCurrency = arg;
    },
  },
};
