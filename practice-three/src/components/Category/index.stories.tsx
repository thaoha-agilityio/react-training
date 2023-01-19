import { ComponentStory, ComponentMeta } from "@storybook/react";

import Category from ".";

export default {
  title: "Category",
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category />;

export const Default = Template.bind({});
