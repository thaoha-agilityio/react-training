import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListIcon, LightIcon, GridIcon } from "@/components/Icon";
import { colors } from "@/themes";

import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    isCircle: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    icon: {
      defaultValue: <LightIcon />,
    },
    width: {
      defaultValue: 40,
    },
    height: {
      defaultValue: 40,
    },
    bgColor: {
      defaultValue: "transparent",
    },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

export const CircleBtn = Template.bind({});
CircleBtn.args = {
  ...CircleBtn.args,
  isCircle: true,
  icon: <ListIcon />,
  borderColor: colors.athensGray,
};

export const CircleBtnActive = Template.bind({});
CircleBtnActive.args = {
  ...CircleBtnActive.args,
  isCircle: true,
  icon: <GridIcon />,
  bgColor: colors.linkWater,
  borderColor: colors.athensGray,
};
