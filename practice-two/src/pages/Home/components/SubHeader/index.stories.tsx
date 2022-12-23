import { BooksContext } from '@/contexts/BooksContext';
import { CategoriesContext } from '@/contexts/CategoriesContext';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SubHeader from '.';

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
  {
    name: 'Romance',
    id: '3',
    total: 123,
  },
];

export default {
  title: 'SubHeader',
  component: SubHeader,
  argTypes: {
    ids: {
      defaultValue: ['1', '2'],
    },
  },
} as ComponentMeta<typeof SubHeader>;

const context = {
  getCategoryById: (ids: string[]) =>
    categories.filter((item) => ids?.some((id) => id === item.id)),
};

const Template: ComponentStory<typeof SubHeader> = (args) => (
  <CategoriesContext.Provider value={context}>
    <SubHeader {...args} />;
  </CategoriesContext.Provider>
);

const Default = Template.bind({});

export { Default };
