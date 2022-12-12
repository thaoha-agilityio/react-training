import CardItem from '@/components/CardItem';

import './index.css';

interface IProps {
  idBooks: string[];
}

const Books = ({ idBooks }: IProps): JSX.Element => {
  return (
    <div className="books">
      {idBooks.map((id: string) => (
        <div key={id}>{<CardItem idBook={id} />}</div>
      ))}
    </div>
  );
};

export default Books;
