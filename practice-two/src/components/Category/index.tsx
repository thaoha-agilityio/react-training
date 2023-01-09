import { memo, useCallback, useContext, useMemo } from 'react';

import { CategoriesContext } from '@/contexts/CategoriesContext';
import { generateColor } from '@/helper/randomColor';
import { ICategory } from '@/types/category';

import './index.css';

interface IProps {
  category: ICategory;
  onSelectCategory: (id: string) => void;
}

const Category = ({
  category: { id, name, total },
  onSelectCategory,
}: IProps): React.ReactElement => {
  const { selectedIds } = useContext(CategoriesContext);

  const handleSelectCategory = (): void => {
    // Check if selected category then don't call function
    if (selectedIds.includes(id)) return;

    onSelectCategory(id);
  };

  const color = useMemo(() => generateColor(), []);

  return (
    <div
      className={`category-wrapper ${selectedIds?.includes(id) ? 'active-category' : ''}`}
      onClick={handleSelectCategory}
    >
      <div className="category">
        <div className="thumbnail" style={{ backgroundColor: color }}>
          <p>{name.substring(0, 2)}</p>
        </div>
        <p className="category-name">{name}</p>
      </div>
      <p className="total">{total}</p>
    </div>
  );
};

export default memo(Category);
