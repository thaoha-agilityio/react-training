import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dialog from '.';

export default {
  title: 'Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

const Default = Template.bind({});

export { Default };
