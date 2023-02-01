import { ComponentMeta, ComponentStory } from "@storybook/react";

import SubHeader from ".";

export default {
  title: "SubHeader",
  component: SubHeader,
  argTypes: {},
} as ComponentMeta<typeof SubHeader>;

const Template: ComponentStory<typeof SubHeader> = () => <SubHeader />;

export const Default = Template.bind({});
