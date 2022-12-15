import { useContext } from 'react';

import Avatar from '../Avatar';

import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  id: string;
  onShowModal: (id: string) => void;
}

const CardItem = ({ id, onShowModal }: IProps): React.ReactElement => {
  const { getBookById } = useContext(BooksContext);
  const book: IBook = getBookById(id);

  return (
    <div className="card-item" data-id={id} onClick={() => onShowModal(id)}>
      <div className="card-image-wrapper">
        <Avatar url={book.avatar} alt={book.name} size="small" />
      </div>
      <div className="card-contents">
        <h2 className="card-title">{book.name}</h2>
        <p className="card-info">{book.author}</p>
        <p className="card-info">{book.published}</p>
      </div>
    </div>
  );
};

export default CardItem;
