import { ComponentMeta, ComponentStory } from "@storybook/react";

import SubHeader from ".";

export default {
  title: "SubHeader",
  component: SubHeader,
  argTypes: {
    onToggleFilterModal: { action: () => console.log('close modal') }
  },
} as ComponentMeta<typeof SubHeader>;

const Template: ComponentStory<typeof SubHeader> = (args) => <SubHeader {...args} />;

export const Default = Template.bind({});
