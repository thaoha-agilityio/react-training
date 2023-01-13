import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListIcon, LightIcon } from "@/components/Icon";

import ToggleButton from ".";

export default {
  title: "ToggleButton",
  component: ToggleButton,
  argTypes: {
    icon: {
      defaultValue: <LightIcon />,
    },
    width: {
      defaultValue: 77,
    },
    height: {
      defaultValue: 34,
    },
    borderRadius: {
      defaultValue: 30,
    },
    textAlign: {
      defaultValue: "left",
      options: ["left", "right"],
      control: { type: "radio" },
    },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Basic = Template.bind({});
