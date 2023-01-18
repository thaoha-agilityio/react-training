import { ComponentStory, ComponentMeta } from "@storybook/react";

import { THUMBNAIL } from "@/constants/mockData";

import Avatar from ".";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    width: {
      defaultValue: 200,
      control: { type: "number" },
    },
    height: {
      defaultValue: 200,
      control: { type: "number" },
    },
    url: {
      defaultValue: THUMBNAIL,
    },
    alt: {
      defaultValue: "avatar",
    },
    borderRadius: {
      defaultValue: 5,
    },
  },
  parameters: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  ...ImageAvatar.args,
  width: 353,
  height: 144,
};
