import { ChangeEvent, useCallback, useContext, useState } from 'react';

import Header from '@/components/Header';
import SubHeader from './SubHeader';
import Books from './Books.tsx';

import SideBar from '@/pages/Home/SideBar';
import { BooksContext } from '@/contexts/BooksContext';
import { CategoriesContext } from '@/contexts/CategoriesContext';
import { ThemeContext } from '@/contexts/ThemeContext ';

import './index.css';

const Home = (): JSX.Element => {
  const { ids, searchBooks } = useContext(BooksContext);
  const { categories } = useContext(CategoriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState<string>('');

  // Handle Search books
  const handleSearchBooks = useCallback(
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      // Get value input
      setValueInput(event.target.value);

      // Search books by name
      await searchBooks(valueInput);
    },
    [valueInput]
  );

  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}  `}>
      <div className="container">
        <Header onchange={handleSearchBooks} />
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
