import React from 'react';

import TableUserRow from '../TableRow';
import TableHeader from '../TableHeader';
import { IUser } from '../../../types/IUser';
import { listCell } from '../../../constants/table';
import './index.css';

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
          <TableHeader listCell={listCell} />
          <tbody className="table-body">{this.renderRow(this.props)}</tbody>
        </table>
      </>
    );
  }
}

export default ListUser;
