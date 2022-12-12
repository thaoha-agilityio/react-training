import CardItem from '@/components/CardItem';

import './index.css';

interface IProps {
  idBooks: string[];
}

const Books = ({ idBooks }: IProps) => {
  return (
    <div className="books">
      {idBooks.map((id: any) => (
        <div key={id}>{<CardItem idBook={id} />}</div>
      ))}
    </div>
  );
};

export default Books;
