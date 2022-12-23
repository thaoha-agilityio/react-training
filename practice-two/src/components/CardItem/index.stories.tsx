import { BooksContext, BooksProvider } from '@/contexts/BooksContext';
import { IBook } from '@/types/book';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useContext } from 'react';

import CardItem from '.';

const id = '1';

export default {
  title: 'CardItem',
  component: CardItem,
  argTypes: {
    book: {
      defaultValue: '1',
    },
  },
} as ComponentMeta<typeof CardItem>;

const context = {};
