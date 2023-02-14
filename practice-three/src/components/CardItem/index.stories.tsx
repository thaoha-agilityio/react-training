import { ComponentStory, ComponentMeta } from "@storybook/react";

import { book } from "@/constants/mockData";

import CardItem from ".";

export default {
  title: "CardItem",
  component: CardItem,
  argTypes: {
    item: {
      defaultValue: book,
    },
    isGridView: {
      defaultValue: true,
      control: { type: "boolean" },
    },
    onSetSelectedBookId: { action: "1" }
  },
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = (args) => (
  <CardItem {...args} />
);

export const Default = Template.bind({});
