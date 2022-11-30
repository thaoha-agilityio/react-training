import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      defaultValue: 'small',
      options: ['small', 'medium', 'large'],
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

const Primary = Template.bind({});

const Secondary = Template.bind({});
Secondary.args = {
  ...Secondary.args,
  variant: 'secondary',
};

const Tertiary = Template.bind({});
Tertiary.args = {
  ...Tertiary.args,
  variant: 'tertiary',
};

const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 'small',
};

const Medium = Template.bind({});
Medium.args = {
  ...Medium.args,
  size: 'medium',
};

const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 'large',
};

export { Primary, Secondary, Tertiary, Small, Medium, Large };
