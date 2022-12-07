import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactComponent as Light } from '@/assets/images/icons/light.svg';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'danger', 'outlined'],
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'radius'],
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
  size: 'medium',
  text: 'click',
};

const Danger = Template.bind({});
Danger.args = {
  ...Danger.args,
  variant: 'danger',
  size: 'large',
  text: 'click',
};

const OutLine = Template.bind({});
OutLine.args = {
  ...OutLine.args,
  variant: 'outlined',
  size: 'large',
  icon: <Light />,
};

export { Primary, Secondary, Danger, OutLine };
