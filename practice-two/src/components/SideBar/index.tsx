import Category from '../Category';

import { ICategory } from '@/types/category';

import './index.css';

interface IProps {
  categories: ICategory[];
}

const SideBar = ({ categories }: IProps): React.ReactElement => {
  return (
    <div className="categories">
      <p className="paraphrase">A curated list of every book ever written</p>
      {categories?.map((category: ICategory) => (
        <Category key={category.categoryName} category={category} />
      ))}
    </div>
  );
};

export default SideBar;
