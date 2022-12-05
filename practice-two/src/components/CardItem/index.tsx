import { BookRequire } from '@/types/book';
import Avatar from '../Avatar';

import './index.css';

interface IProps {
  book: BookRequire;
}

const CardItem = ({ book }: IProps): React.ReactElement => {
  return (
    <div className="card-item" data-id={book.id}>
      <div className="card-image">
        <Avatar url={book.avatar} alt={book.name} />
      </div>
      <div className="card-contents">
        <h2 className="title">{book.name}</h2>
        <p className="info">{book.author}</p>
        <p className="info">{book.published}</p>
      </div>
    </div>
  );
};

export default CardItem;
