import Button from '../../Button';
import Chip from '../../Chip';
import { ArrowIcon, GridIcon, ListIcon } from '../../Icon';

import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  books: IBook[];
}

const FilterModal = ({ books }: IProps) => {
  return (
    <div className="overlay">
      <div className="filter-modal">
        <p className="options">Display Options</p>
        <div className="btn-wrapper">
          <div className="optional-layout">
            <Button variant="primary" icon={<GridIcon />} styles="circle" />
            <p>Grid</p>
          </div>

          <div className="optional-layout">
            <Button variant="primary" icon={<ListIcon />} styles="circle" />
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
