import { useContext, useEffect, useState } from 'react';

import Header from '@/components/Header';
import SubHeader from './SubHeader';
import Books from './Books.tsx';

import { getData } from '@/services/APIRequest';

import { API_BASE_URL, API_PATH } from '@/constants/api';
import { ICategory } from '@/types/category';
import SideBar from '@/components/SideBar';
import { BooksContext } from '@/contexts/BooksContext';

import './index.css';

const Home = (): JSX.Element => {
  const { ids } = useContext(BooksContext);
  const [categories, setCategories] = useState<ICategory[]>([]);

  // Get categories form server
  const getCategories = async (): Promise<void> => {
    const categories: ICategory[] = await getData(`${API_BASE_URL}${API_PATH.categories}`);
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <Header />
        <SubHeader />
        <div className="contents">
          <SideBar categories={categories} />
          <Books idBooks={ids} />
        </div>
      </div>
    </div>
  );
};

export default Home;
