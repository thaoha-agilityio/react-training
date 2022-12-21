import { memo } from 'react';

import CardItem from '@/components/CardItem';

import { NOTICE_MESSAGE } from '@/constants/message';

import './index.css';

interface IProps {
  isGridView: boolean;
  ids: string[];
  onShowModal: (id: string) => void;
}

const Books = ({ ids, isGridView, onShowModal }: IProps): JSX.Element => {
  return (
    <div className={`${isGridView ? 'grid' : 'list'}`}>
      {ids.map((id: string) => (
        <div key={id}>{<CardItem id={id} onShowModal={onShowModal} />}</div>
      ))}

      {/* Show message when array empty */}
      {ids.length === 0 && <p>{NOTICE_MESSAGE}</p>}
    </div>
  );
};

export default memo(Books);
