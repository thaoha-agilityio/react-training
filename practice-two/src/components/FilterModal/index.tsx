import Button from '../Button';
import Chip from '../Chip';

import { ReactComponent as GridIcon } from '@/assets/images/icons/grid.svg';
import { ReactComponent as ListIcon } from '@/assets/images/icons/list.svg';
import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow.svg';
import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  books: IBook;
}

const FilterModal = ({ books }: IProps) => {
  return (
    <div className="overlay">
      <div className="modal-filter">
        <p className="options">Display Options</p>
        <div className="btn-wrapper">
          <div className="optional-layout">
            <Button variant="outlined" icon={<GridIcon />} size="radius" />
            <p>Grid</p>
          </div>
          <div className="optional-layout">
            <Button variant="outlined" icon={<ListIcon />} size="radius" />
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
