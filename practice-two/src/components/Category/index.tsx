import { CategoriesContext } from '@/contexts/CategoriesContext';
import { generateColor } from '@/helper/randomColor';
import { ICategory } from '@/types/category';
import { memo, useContext } from 'react';

import './index.css';

interface IProps {
  category: ICategory;
  onSelectId: (id: string) => void;
}

const Category = ({ category: { id, name, total }, onSelectId }: IProps): React.ReactElement => {
  const { categoriesId } = useContext(CategoriesContext);

  const handleSelectId = () => {
    onSelectId(id);
  };

  return (
    <div className={`${categoriesId.includes(id) ? 'active' : ''}`}>
      <div className="category-wrapper" onClick={handleSelectId}>
        <div className="category">
          <div className="thumbnail" style={{ backgroundColor: generateColor() }}>
            <p>{name.substring(0, 2)}</p>
          </div>
          <p className="category-name">{name}</p>
        </div>
        <p className="total">{total}</p>
      </div>
    </div>
  );
};

export default memo(Category);
