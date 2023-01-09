import { BooksContext } from '@/contexts/BooksContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CardItem from '.';

const books = [
  {
    name: 'Down With The Red Flag',
    avatar: 'http://digital.library.lse.ac.uk/objects/lse:dap375xow/view/medium',
    author: 'Jamal Kasper',
    description:
      'Liberal Unionist poster depicting the British Bulldog taking a large bite out of the impending spectre of Socialism in the country.',
    published: 1990,
    publisher: 'Printer',
    id: '1',
  },
  {
    name: 'Don Quijote de la Mancha',
    avatar: 'https://image.cdn0.buscalibre.com/5c7482160bf0b5fd0c8b4567.__RSF640x640__.jpg',
    author: 'libsa',
    description: 'abc',
    published: 2016,
    publisher: 'Printer',
    id: '2',
  },
];

export default {
  title: 'CardItem',
  component: CardItem,
  argTypes: {
    id: {
      defaultValue: '1',
    },
    onShowModal: { action: 'click' },
  },
} as ComponentMeta<typeof CardItem>;

const context = {
  getBookById: (id: string) => books.find((item) => item.id === id),
};

export const Template: ComponentStory<typeof CardItem> = (args) => (
  <BooksContext.Provider value={context}>
    <CardItem {...args} />
  </BooksContext.Provider>
);
