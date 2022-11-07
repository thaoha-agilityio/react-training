import React from 'react';

import circumflexDownIcon from '../../../assets/images/circumflexDownIcon.jpg';
import './index.css';

class RowMore extends React.Component {
  render(): React.ReactNode {
    return (
      <tr className="table-row">
        <td className="row-more" colSpan={7}>
          <div className="more">
            <p>More</p>
            <a>
              <img src={circumflexDownIcon} />
            </a>
          </div>
        </td>
      </tr>
    );
  }
}

export default RowMore;
