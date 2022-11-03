import React from 'react';

import TableUserRow from './tableUserRow';

import './index.css';
import { IUser } from '../../types/IUser';

interface IProps {
  list: IUser[];
}

class ListUser extends React.Component<IProps> {
  renderRow = (listRow: IProps) => {
    const { list } = listRow;

    return list.map((item, index) => <TableUserRow key={item.id} user={item} order={index + 1} />);
  };

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
          {this.renderRow(this.props)}
        </table>
      </>
    );
  }
}

export default ListUser;
