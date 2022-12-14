import { memo } from 'react';

import CardItem from '@/components/CardItem';

import { NOTICE_MESSAGE } from '@/constants/message';

import './index.css';

interface IProps {
  ids: string[];
}

const Books = ({ ids }: IProps): JSX.Element => {
  return (
    <div className="books">
      {ids.map((id: string) => (
        <div key={id}>{<CardItem id={id} />}</div>
      ))}

      {/* Show message when array empty */}
      {ids.length === 0 && <p>{NOTICE_MESSAGE}</p>}
    </div>
  );
};

export default memo(Books);
