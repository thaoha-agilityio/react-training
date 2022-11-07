import React from 'react';

import circumflexDownIcon from '../../../assets/images/circumflexDownIcon.jpg';
import circumflexUpIcon from '../../../assets/images/circumflexUpIcon.jpg';
import './index.css';

interface IProps {
  onClick: () => void;
  loadMore: boolean;
}

const RowMore = ({ onClick, loadMore }: IProps): React.ReactElement => {
  return (
    <tr className="table-row">
      <td className="row-more" colSpan={7}>
        <div className="more">
          <p>{loadMore ? 'less' : 'more'}</p>
          <button onClick={onClick}>
            <img src={loadMore ? circumflexUpIcon : circumflexDownIcon} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RowMore;
