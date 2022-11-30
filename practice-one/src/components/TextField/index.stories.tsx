import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from '.';

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;
const Search = Template.bind({});

Search.args = {
  ...Search.args,
  placeholder: 'Search name...',
};

export { Search };
