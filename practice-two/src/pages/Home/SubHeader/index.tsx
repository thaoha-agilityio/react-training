import Chip from '@/components/Chip';
import { SvgXmarkComponent, SvgArrowRightComponent, SvgFilterComponent } from '@/components/Icon';

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
            endAdornments={<SvgXmarkComponent />}
            size="medium"
          />
          <SvgArrowRightComponent />
          <p className="result">Showing {total?.toString()}Result(s)</p>
        </div>
      )}
      <div>
        <Chip
          label="filter"
          adornments="startAdornments"
          startAdornments={<SvgFilterComponent />}
          size="small"
        />
      </div>
    </div>
  );
};

export default SubHeader;
