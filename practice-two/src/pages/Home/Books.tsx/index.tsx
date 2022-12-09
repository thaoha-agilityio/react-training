import CardItem from '@/components/CardItem';

import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  books: IBook[];
}

const Books = ({ books }: IProps) => {
  return (
    <div className="books">
      {books.map((book) => (
        <div key={book.id}>
          <CardItem book={book} />
        </div>
      ))}
    </div>
  );
};

export default Books;
