import { ComponentMeta, ComponentStory } from "@storybook/react";

import { categories } from "@/constants/mockData";

import SideBar from ".";

export default {
  title: "SideBar",
  component: SideBar,
  argTypes: {
    categories: {
      defaultValue: categories,
    },
  },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Default = Template.bind({});
