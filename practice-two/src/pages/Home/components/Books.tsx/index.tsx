import { memo, useContext } from 'react';

import CardItem from '@/components/CardItem';

import { NOTICE_MESSAGE } from '@/constants/messages';
import { IBook } from '@/types/book';
import { BooksContext } from '@/contexts/BooksContext';

import './index.css';

interface IProps {
  isGridView: boolean;
  onShowModal: (id: string) => void;
}

const Books = ({ isGridView, onShowModal }: IProps): JSX.Element => {
  const { books } = useContext(BooksContext);

  return (
    <div className={`books ${isGridView ? 'grid' : 'list'}`}>
      {books.map((item) => (
        <div key={item.id}>{<CardItem onShowModal={onShowModal} item={item} />}</div>
      ))}

      {/* Show message when array empty */}
      {books.length === 0 && <p>{NOTICE_MESSAGE}</p>}
    </div>
  );
};

export default memo(Books);
