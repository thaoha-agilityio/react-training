import { memo } from 'react';

import Chip from '@/components/Chip';
import { XmarkIcon, ArrowRightIcon, FilterIcon } from '@/components/Icon';

import './index.css';

interface IProps {
  categoryName?: string;
  total?: Number;
}

const SubHeader = ({ categoryName, total }: IProps): React.ReactElement => {
  return (
    <div className="sub-header">
      <h2>Categories</h2>
      {categoryName && (
        <div className="total-categories">
          <Chip
            label={categoryName}
            adornments={'endAdornments'}
            endAdornments={<XmarkIcon />}
            size="medium"
          />
          <ArrowRightIcon />
          <p className="result">Showing {total?.toString()}Result(s)</p>
        </div>
      )}
      <div>
        <Chip
          label="filter"
          adornments="startAdornments"
          startAdornments={<FilterIcon />}
          size="small"
        />
      </div>
    </div>
  );
};

export default memo(SubHeader);
