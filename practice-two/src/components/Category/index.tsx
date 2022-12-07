import { generateColor } from '@/helper/randomColor';
import { ICategory } from '@/types/category';

import './index.css';

interface IProps {
  category: ICategory;
}

const Category = ({ category: { categoryName, acronym, total } }: IProps): React.ReactElement => {
  return (
    <div className="category-wrapper">
      <div className="category">
        <div className="thumbnail" style={{ backgroundColor: generateColor() }}>
          <p>{acronym}</p>
        </div>
        <p className="category-name">{categoryName}</p>
      </div>
      <p className="total">{total.toString()}</p>
    </div>
  );
};

export default Category;
