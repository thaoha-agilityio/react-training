import { ComponentMeta, ComponentStory } from '@storybook/react';

import SideBar from '.';

const categories = [
  {
    name: 'Adventure',
    id: '1',
    total: 123,
  },
  {
    name: 'Romance',
    id: '2',
    total: 123,
  },
];

export default {
  title: 'SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
  categories: categories,
};

export { Default };
