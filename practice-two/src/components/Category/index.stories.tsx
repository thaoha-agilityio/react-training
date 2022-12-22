import { ICategory } from '@/types/category';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Category from '.';

const category: ICategory = {
  name: 'Adventure',
  id: '1',
  total: 12,
};

export default {
  title: 'Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
  category: category,
};

export { Default };
