import { memo } from 'react';

import Avatar from '../Avatar';

import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  id: string;
  item: IBook;
  onShowModal: (id: string) => void;
}

const CardItem = ({ id, onShowModal, item }: IProps): React.ReactElement => {
  const handleClick = (): void => {
    onShowModal(id);
  };

  return (
    <div className="card-item" data-id={id} onClick={handleClick}>
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
