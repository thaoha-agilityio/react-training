import CardItem from '@/components/CardItem';

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
    </div>
  );
};

export default Books;
