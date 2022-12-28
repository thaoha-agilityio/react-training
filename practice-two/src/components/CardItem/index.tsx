import { memo } from 'react';

import Avatar from '../Avatar';

import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  item: IBook;
  onShowModal: (id: string) => void;
}

const CardItem = ({ onShowModal, item }: IProps): React.ReactElement => {
  const handleClick = (): void => {
    onShowModal(item.id);
  };

  return (
    <div className="card-item" onClick={handleClick}>
      <div className="card-image-wrapper">
        <Avatar url={item.avatar} alt={item.name} size="small" />
      </div>
      <div className="card-contents">
        <h2 className="card-title">{item.name}</h2>
        <p className="card-info">{item.author}</p>
        <p className="card-info">{item.published}</p>
      </div>
    </div>
  );
};

export default memo(CardItem);
