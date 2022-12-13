import { ComponentMeta, ComponentStory } from '@storybook/react';

import SideBar from '.';

const data = [
  {
    categoryName: 'Adventure',
    acronym: 'ad',
    total: 123,
  },
  {
    categoryName: 'Romance',
    acronym: 'rm',
    total: 123,
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
