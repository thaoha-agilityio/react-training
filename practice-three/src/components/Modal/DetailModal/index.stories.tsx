import { ComponentMeta, ComponentStory } from "@storybook/react";

import DetailModal from ".";

import { book } from "@/constants/mockData";

export default {
  title: "DetailModal",
  component: DetailModal,
  argTypes: {
    book: {
      defaultValue: book,
    },
  },
} as ComponentMeta<typeof DetailModal>;

const Template: ComponentStory<typeof DetailModal> = (args) => (
  <DetailModal {...args} />
);

export const Default = Template.bind({});
