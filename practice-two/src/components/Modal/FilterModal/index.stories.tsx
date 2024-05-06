import { ComponentMeta, ComponentStory } from '@storybook/react';

import FilterModal from '.';

export default {
  title: 'FilterModal',
  component: FilterModal,
} as ComponentMeta<typeof FilterModal>;

const Template: ComponentStory<typeof FilterModal> = (args) => <FilterModal {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
};

export { Default };
