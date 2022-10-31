import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      defaultValue: 'small',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    children: {
      defaultValue: 'click',
      control: { type: 'text' },
    },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  ...Secondary.args,
  variant: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  ...Tertiary.args,
  variant: 'tertiary',
};

export const Small = Template.bind({});

export const Medium = Template.bind({});

Medium.args = {
  ...Medium.args,
  size: 'medium',
};

export const Large = Template.bind({});

Large.args = {
  ...Large.args,
  size: 'large',
};
