import { CATEGORIES_BACKGROUND } from '@/constants/categories';

import './index.css';

interface IProps {
  categoryName: string;
  acronym: string;
  total: Number;
  background: CATEGORIES_BACKGROUND;
}

const Category = ({ categoryName, acronym, total, background }: IProps): React.ReactElement => {
  return (
    <div className="category-wrapper">
      <div className="category">
        <div className={`thumbnail thumbnail-${background}`}>
          <p>{acronym}</p>
        </div>
        <p className="category-name">{categoryName}</p>
      </div>
      <p className="total">{total.toString()}</p>
    </div>
  );
};

export default Category;
