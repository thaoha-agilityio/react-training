import { generateColor } from '@/helper/randomColor';
import { ICategory } from '@/types/category';

import './index.css';

interface IProps {
  category: ICategory;
}

const Category = ({ category: { name, total } }: IProps): React.ReactElement => {
  return (
    <div className="category-wrapper">
      <div className="category">
        <div className="thumbnail" style={{ backgroundColor: generateColor() }}>
          <p>{name.substring(0, 2)}</p>
        </div>
        <p className="category-name">{name}</p>
      </div>
      <p className="total">{total.toString()}</p>
    </div>
  );
};

export default Category;
