import { ComponentMeta, ComponentStory } from '@storybook/react';

import Category from '.';

const data = {
  categoryName: 'Adventure',
  acronym: 'ad',
  total: 123,
};

export default {
  title: 'Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
  category: data,
};

export { Default };
