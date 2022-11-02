import React from 'react';

import './index.css';
import TableUserRow from './tableUserRow';

class ListUser extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <table className="table">
          <thead className="table-header">
            <tr className="table-row">
              <th>
                order <span>|</span>
              </th>
              <th>
                user <span>|</span>
              </th>
              <th>
                login <span>|</span>
              </th>
              <th>
                role <span>|</span>
              </th>
              <th>
                project <span>|</span>
              </th>
              <th>
                status <span>|</span>
              </th>
              <th>
                action <span>|</span>
              </th>
            </tr>
          </thead>
          <TableUserRow />
        </table>
      </>
    );
  }
}

export default ListUser;
