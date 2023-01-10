import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListIcon } from "@/components/Icon";

import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "primary",
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    isCircle: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    text: {
      defaultValue: "click",
      control: { type: "text" },
    },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  ...Secondary.args,
  isCircle: false,
  variant: "secondary",
  size: "large",
  text: "esc",
};

export const IconBtn = Template.bind({});
IconBtn.args = {
  ...IconBtn.args,
  isCircle: true,
  variant: "primary",
  size: "large",
  icon: <ListIcon />,
};
