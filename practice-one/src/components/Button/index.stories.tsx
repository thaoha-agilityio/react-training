import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  // argTypes: {
  //   primary: {
  //     defaultValue: true,
  //   },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Click</Button>;

const ButtonPrimary = Template.bind({});

ButtonPrimary.args = {
  ...ButtonPrimary.args,
  size: 'medium',
  children: 'Add User',
  primary: true,
};

export { ButtonPrimary };
