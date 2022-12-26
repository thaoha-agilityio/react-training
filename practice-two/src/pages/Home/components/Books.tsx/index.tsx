import { memo, useContext } from 'react';

import CardItem from '@/components/CardItem';

import { NOTICE_MESSAGE } from '@/constants/messages';
import { BooksContext } from '@/contexts/BooksContext';

import './index.css';

interface IProps {
  isGridView: boolean;
  ids: string[];
  onShowModal: (id: string) => void;
}

const Books = ({ ids, isGridView, onShowModal }: IProps): JSX.Element => {
  const { getBookById } = useContext(BooksContext);

  return (
    <div className={`books ${isGridView ? 'grid' : 'list'}`}>
      {ids.map((id: string) => (
        <div key={id}>{<CardItem id={id} onShowModal={onShowModal} item={getBookById(id)} />}</div>
      ))}

      {/* Show message when array empty */}
      {ids.length === 0 && <p>{NOTICE_MESSAGE}</p>}
    </div>
  );
};

export default memo(Books);
