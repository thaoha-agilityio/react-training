import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import SubHeader from './SubHeader';
import Books from './Books.tsx';

import { getData } from '@/services/APIRequest';
import { IBook } from '@/types/book';
import { API_BASE_URL, API_PATH } from '@/constants/api';

import './index.css';

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async (): Promise<void> => {
    const books: IBook[] = await getData(`${API_BASE_URL}${API_PATH}`);
    setBooks(books);
  };

  return (
    <div className="home">
      <div className="container">
        <Header />
        <SubHeader />
        <div className="contents">
          <Books books={books} />
        </div>
      </div>
    </div>
  );
};

export default Home;
