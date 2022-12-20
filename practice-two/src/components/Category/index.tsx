import { CategoriesContext } from '@/contexts/CategoriesContext';
import { generateColor } from '@/helper/randomColor';
import { ICategory } from '@/types/category';
import { memo, useContext } from 'react';

import './index.css';

interface IProps {
  category: ICategory;
  onSelectCategory: (id: string) => void;
}

const Category = ({
  category: { id, name, total },
  onSelectCategory,
}: IProps): React.ReactElement => {
  const { categoryIds } = useContext(CategoriesContext);

  const handleSelectCategory = (): void => {
    // Check if selected category then don't call function
    if (categoryIds.includes(id)) return;

    onSelectCategory(id);
  };

  return (
    <div
      className={`category-wrapper ${categoryIds.includes(id) ? 'active' : ''}`}
      onClick={handleSelectCategory}
    >
      <div className="category">
        <div className="thumbnail" style={{ backgroundColor: generateColor() }}>
          <p>{name.substring(0, 2)}</p>
        </div>
        <p className="category-name">{name}</p>
      </div>
      <p className="total">{total}</p>
    </div>
  );
};

export default memo(Category);
