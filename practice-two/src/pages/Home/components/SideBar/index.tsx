import { memo, useContext } from 'react';

import { CategoriesContext } from '@/contexts/CategoriesContext';
import { BooksContext } from '@/contexts/BooksContext';

import Category from '@/components/Category';

import { ICategory } from '@/types/category';

import './index.css';

interface IProps {
  categories: ICategory[];
}

const SideBar = ({ categories }: IProps): React.ReactElement => {
  const { setSelectedCategory, selectedIds } = useContext(CategoriesContext);
  const { filterByCategories } = useContext(BooksContext);

  // Set categoryId when click
  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);

    // Show books after filter
    filterByCategories([...selectedIds, id]);
  };

  return (
    <div className="categories">
      <p className="paraphrase">A curated list of every book ever written</p>
      {categories?.map((category: ICategory) => (
        <div key={category.id}>
          <Category
            key={category.name}
            category={category}
            onSelectCategory={handleSelectCategory}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(SideBar);
