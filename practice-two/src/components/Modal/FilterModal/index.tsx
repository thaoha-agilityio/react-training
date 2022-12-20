import { BooksContext } from '@/contexts/BooksContext';
import { useContext } from 'react';
import Button from '../../Button';
import Chip from '../../Chip';
import { ArrowIcon, GridIcon, ListIcon } from '../../Icon';

import './index.css';

interface IProps {
  onCloseModal: () => void;
}

const FilterModal = ({ onCloseModal }: IProps) => {
  const { changeGridView, isGridView } = useContext(BooksContext);

  return (
    <div className="overlay" onClick={onCloseModal}>
      <div className="filter-modal">
        <p className="options">Display Options</p>
        <div className="btn-wrapper">
          <div
            className={`optional-layout ${isGridView ? 'active' : ''}`}
            onClick={() => changeGridView(true)}
          >
            <Button variant="primary" icon={<GridIcon />} styles="circle" />
            <p>Grid</p>
          </div>

          <div className={`optional-layout ${!isGridView ? 'active' : ''}`}>
            <Button
              variant="primary"
              icon={<ListIcon />}
              styles="circle"
              onClick={() => changeGridView(false)}
            />
            <p>List</p>
          </div>
        </div>
        <div className="sort">
          <p className="options">Sort By</p>
          <Chip
            label="Alphabetical Order"
            size="large"
            adornments="customAdornments"
            endAdornments={<ArrowIcon />}
          />
          <Chip
            label="Release Year"
            size="large"
            adornments="customAdornments"
            endAdornments={<ArrowIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
