import { ComponentStory, ComponentMeta } from "@storybook/react";

import { category } from "@/constants/mockData";

import Category from ".";

export default {
  title: "Category",
  component: Category,
  argTypes: {
    category: {
      defaultValue: category,
    },
    onSelectCategory: { action: '1' }
  },
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const Default = Template.bind({});
