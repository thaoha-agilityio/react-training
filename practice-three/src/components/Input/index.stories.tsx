import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchIcon } from "@/components/Icon";

import Input from ".";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    isCircle: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    children: {
      defaultValue: <SearchIcon />,
    },
    width: {
      defaultValue: 670,
    },
    height: {
      defaultValue: 53,
    },
    pLeft: {
      defaultValue: 48,
    },
    borderRadius: {
      defaultValue: 30,
    },
    placeholder: {
      defaultValue: "Search books",
    },
  },
  parameters: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
