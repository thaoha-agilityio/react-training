import { useContext } from 'react';
import Avatar from '../Avatar';

import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  idBook: string;
}

const CardItem = ({ idBook }: IProps): React.ReactElement => {
  const { books } = useContext(BooksContext);
  const book: IBook = books.find((item) => item.id === idBook) as IBook;

  return (
    <div className="card-item" data-id={idBook}>
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
