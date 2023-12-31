import { memo, useContext } from 'react';

import { CategoriesContext } from '@/contexts/CategoriesContext';

import Chip from '@/components/Chip';
import { BooksContext } from '@/contexts/BooksContext';
import { XmarkIcon, ArrowRightIcon, FilterIcon } from '@/components/Icon';

import './index.css';

interface IProps {
  onShowModal: () => void;
}

const SubHeader = ({ onShowModal }: IProps): React.ReactElement => {
  const { selectedIds, getCategoryById, removeSelectedCategory } = useContext(CategoriesContext);
  const { filterByCategories, getBooks, books } = useContext(BooksContext);

  const categories = getCategoryById(selectedIds);

  // Remove category in sub heading
  const handleRemoveCategories = (id: string) => {
    removeSelectedCategory(id);

    const currentId = selectedIds.filter((categoryId) => categoryId !== id);

    // Check currentId is empty then render initial books
    if (!currentId.length) {
      getBooks();

      return;
    }

    filterByCategories(currentId);
  };

  return (
    <div className="sub-header">
      <h2>Categories</h2>

      <div className="total-categories">
        {categories.map((category) => (
          <div key={category.id}>
            <Chip
              label={category.name}
              adornments={'endAdornments'}
              endAdornments={<XmarkIcon />}
              size="medium"
              onClick={() => handleRemoveCategories(category.id)}
            />
          </div>
        ))}
        <ArrowRightIcon />
        <p className="result">Showing {books.length} Result(s)</p>
      </div>

      <div>
        <Chip
          label="filter"
          adornments="startAdornments"
          startAdornments={<FilterIcon />}
          size="small"
          onClick={onShowModal}
        />
      </div>
    </div>
  );
};

export default memo(SubHeader);
