import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SearchIcon } from '../Icon';
import Input from '@/components/Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const Text = Template.bind({});
Text.args = {
  ...Text.args,
  type: 'text',
  placeholder: 'Search books',
  size: 'large',
  leftElement: <SearchIcon />,
};

const Checkbox = Template.bind({});
Checkbox.args = {
  ...Checkbox.args,
  type: 'checkbox',
};

export { Text, Checkbox };
