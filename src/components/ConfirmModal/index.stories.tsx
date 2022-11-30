import { ComponentMeta, ComponentStory } from '@storybook/react';

import ConfirmModal from '.';

export default {
  title: 'ConfirmModal',
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  message: 'Do you wanna delete the item?',
};
