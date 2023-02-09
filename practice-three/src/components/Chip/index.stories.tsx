import { ComponentStory, ComponentMeta } from "@storybook/react";

import { colors } from "@/themes";
import { FilterIcon, XmarkIcon, ArrowIcon } from "@/components/Icon";

import Chip from ".";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    width: {
      defaultValue: 116,
      control: { type: "number" },
    },
    height: {
      defaultValue: 45,
      control: { type: "number" },
    },
    color: {
      defaultValue: colors.comet,
    },
    bgColor: {
      defaultValue: colors.linkWater,
    },
    flexLayout: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    borderRadius: {
      defaultValue: 30,
    },
    pLeft: {
      defaultValue: 15,
    },
    pRight: {
      defaultValue: 15,
    },
    label: {
      defaultValue: "Filter",
    },
    startAdornments: {
      defaultValue: <FilterIcon />,
    },
    fontWeight: {
      defaultValue: 400,
    },
    fontSize: {
      defaultValue: 14,
    },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

export const Deletable = Template.bind({});
Deletable.args = {
  ...Deletable.args,
  width: 123,
  height: 48,
  color: colors.azureRadiance,
  endAdornments: <XmarkIcon />,
  startAdornments: null,
  pLeft: 28,
  fontWeight: 500,
  onClick: () => {
    alert("Close selected item");
  },
};

export const Filter = Template.bind({});
Filter.args = {
  ...Filter.args,
  width: 225,
  height: 46,
  label: "Alphabetical Order",
  fontSize: 13,
  color: colors.azureRadiance,
  flexLayout: true,
  borderRadius: 10,
  endAdornments: <ArrowIcon />,
  startAdornments: null,
};
