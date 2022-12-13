import { useContext } from 'react';

import Header from '@/components/Header';
import SubHeader from './SubHeader';
import Books from './Books.tsx';

import SideBar from '@/components/SideBar';
import { BooksContext } from '@/contexts/BooksContext';

import './index.css';
import { CategoriesContext } from '@/contexts/CategoriesContext';

const Home = (): JSX.Element => {
  const { ids } = useContext(BooksContext);
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="home">
      <div className="container">
        <Header />
        <SubHeader />
        <div className="contents">
          <SideBar categories={categories} />
          <Books ids={ids} />
        </div>
      </div>
    </div>
  );
};

export default Home;
