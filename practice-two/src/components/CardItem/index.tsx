import { BookRequire } from '@/types/book';
import Avatar from '../Avatar';

import './index.css';

interface IProps {
  book: BookRequire;
}

const CardItem = ({ book }: IProps): React.ReactElement => {
  return (
    <div className="card-item">
      <div className="card-image">
        <Avatar url="" alt="" />
      </div>
      <div className="card-contents">
        <h2 className="title"></h2>
        <p className="info"></p>
        <p className="info"></p>
      </div>
    </div>
  );
};

export default CardItem;
