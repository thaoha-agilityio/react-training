import { IBook } from '@/types/book';
import Avatar from '../Avatar';

import './index.css';

interface IProps {
  book: IBook;
}

const CardItem = ({
  book: { id, name, avatar, author, published },
}: IProps): React.ReactElement => {
  return (
    <div className="card-item" data-id={id}>
      <div className="card-image-wrapper">
        <Avatar url={avatar} alt={name} size="small" />
      </div>
      <div className="card-contents">
        <h2 className="card-title">{name}</h2>
        <p className="card-info">{author}</p>
        <p className="card-info">{published}</p>
      </div>
    </div>
  );
};

export default CardItem;
