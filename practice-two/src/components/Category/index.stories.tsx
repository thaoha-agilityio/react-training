import { CATEGORIES_BACKGROUND } from '@/constants/categories';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Category from '.';

export default {
  title: 'Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
  categoryName: 'Adventure',
  acronym: 'ad',
  total: 123,
  background: CATEGORIES_BACKGROUND.ORANGE,
};

const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  categoryName: 'Adventure',
  acronym: 'ad',
  total: 123,
  background: CATEGORIES_BACKGROUND.BLUE,
};

export { Default, Primary };
