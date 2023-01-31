import { ComponentStory, ComponentMeta } from "@storybook/react";

import FilterModal from ".";

export default {
  title: "FilterModal",
  component: FilterModal,
  argTypes: {
    width: {
      defaultValue: 268,
      control: { type: "number" },
    },
    height: {
      defaultValue: 331,
      control: { type: "number" },
    },
    top: {
      defaultValue: 20,
      control: { type: "number" },
    },
    right: {
      defaultValue: 70,
      control: { type: "number" },
    },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof FilterModal>;

const Template: ComponentStory<typeof FilterModal> = (args) => (
  <FilterModal {...args} />
);

export const Default = Template.bind({});
