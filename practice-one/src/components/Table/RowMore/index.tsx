import React from 'react';

import circumflexDownIcon from '../../../assets/images/circumflexDownIcon.jpg';
import circumflexUpIcon from '../../../assets/images/circumflexUpIcon.jpg';
import './index.css';

interface IProps {
  onClick: () => void;
  hasLoadMore: boolean;
}

const RowMore = ({ onClick, hasLoadMore }: IProps): React.ReactElement => {
  return (
    <tr className="table-row">
      <td className="row-more" colSpan={7}>
        <div className="more">
          <p>{hasLoadMore ? 'less' : 'more'}</p>
          <button onClick={onClick}>
            <img src={hasLoadMore ? circumflexUpIcon : circumflexDownIcon} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RowMore;
