import Button from '../Button';
import Chip from '../Chip';
import SvgGridComponent from '../Icon/SvgGridComponent';
import SvgListComponent from '../Icon/SvgListComponent';
import SvgArrowComponent from '../Icon/SvgArrowComponent';

import { IBook } from '@/types/book';

import './index.css';

interface IProps {
  books: IBook[];
}

const FilterModal = ({ books }: IProps) => {
  return (
    <div className="overlay">
      <div className="modal-filter">
        <p className="options">Display Options</p>
        <div className="btn-wrapper">
          <div className="optional-layout">
            <Button variant="outlined" icon={<SvgGridComponent />} size="radius" />
            <p>Grid</p>
          </div>
          <div className="optional-layout">
            <Button variant="outlined" icon={<SvgListComponent />} size="radius" />
            <p>List</p>
          </div>
        </div>
        <div className="sort">
          <p className="options">Sort By</p>
          <Chip
            label="Alphabetical Order"
            size="large"
            adornments="customAdornments"
            endAdornments={<SvgArrowComponent />}
          />
          <Chip
            label="Release Year"
            size="large"
            adornments="customAdornments"
            endAdornments={<SvgArrowComponent />}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
