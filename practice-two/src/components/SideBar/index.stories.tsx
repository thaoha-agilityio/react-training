import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CATEGORIES_BACKGROUND } from '@/constants/categories';

import SideBar from '.';

const data = [
  {
    categoryName: 'Adventure',
    acronym: 'ad',
    total: 123,
    background: CATEGORIES_BACKGROUND.LIGHTBLUE,
  },
  {
    categoryName: 'Romance',
    acronym: 'rm',
    total: 123,
    background: CATEGORIES_BACKGROUND.PINK,
  },
];

export default {
  title: 'Category',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
  categories: data,
};

export { Default };
