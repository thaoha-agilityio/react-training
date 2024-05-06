import { ComponentMeta, ComponentStory } from '@storybook/react';

import Category from '.';

const category = {
  id: '1',
  name: 'Sport',
  total: 1,
};

export default {
  title: 'Category',
  component: Category,
  argTypes: {
    category: {
      defaultValue: category,
    },
    actions: {
      onSelectCategory: ['click'],
    },
  },
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;

const DefaultValue = Template.bind({});

export { DefaultValue };
