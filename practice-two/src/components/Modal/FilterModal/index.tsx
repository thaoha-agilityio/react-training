import { memo, useContext } from 'react';

import { BooksContext } from '@/contexts/BooksContext';

import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { ArrowIcon, GridIcon, ListIcon } from '@/components/Icon';

import './index.css';

interface IProps {
  onCloseModal: () => void;
}

const FilterModal = ({ onCloseModal }: IProps) => {
  const {
    changeGridView,
    isGridView,
    sortByAlphabet,
    sortByReleaseYear,
    sortNameStatus,
    sortYearStatus,
  } = useContext(BooksContext);

  const handleChangeGridView = (): void => {
    changeGridView();
  };

  return (
    <div className="overlay" onClick={onCloseModal}>
      <div className="filter-modal">
        <p className="options">Display Options</p>
        <div className="btn-wrapper">
          <div className={`optional-layout ${isGridView ? 'active' : ''}`} onClick={changeGridView}>
            <Button variant="primary" icon={<GridIcon />} styles="circle" size="small" />
            <p>Grid</p>
          </div>

          <div className={`optional-layout ${!isGridView ? 'active' : ''}`}>
            <Button
              variant="primary"
              icon={<ListIcon />}
              styles="circle"
              size="small"
              onClick={handleChangeGridView}
            />
            <p>List</p>
          </div>
        </div>
        <div className="sort">
          <p className="options">Sort By</p>
          <div className={`${sortNameStatus ? 'active-sort' : ''}`}>
            <Chip
              label="Alphabetical Order"
              size="large"
              adornments="customAdornments"
              endAdornments={<ArrowIcon />}
              onClick={sortByAlphabet}
            />
          </div>
          <div className={`${sortYearStatus ? 'active-sort' : ''}`}>
            <Chip
              label="Release Year"
              size="large"
              adornments="customAdornments"
              endAdornments={<ArrowIcon />}
              onClick={sortByReleaseYear}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FilterModal);
