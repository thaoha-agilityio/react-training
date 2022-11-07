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
  state = { listData: this.props.list };

  handleDeleteUser = (users: IUser[], id: string) => {
    const currentUser = users.filter((item) => item.id !== id);

    this.setState({ listData: currentUser });
  };

  renderRow = (listRow: IUser[]) => {
    return listRow.map((item, index) => (
      <TableUserRow
        key={item.id}
        user={item}
        order={index + 1}
        onDelete={this.handleDeleteUser}
        users={listRow}
      />
    ));
  };

  render(): React.ReactNode {
    return (
      <>
        <table className="table">
          <TableHeader listCell={listCell} />
          <tbody className="table-body">{this.renderRow(this.state.listData)}</tbody>
        </table>
      </>
    );
  }
}

export default ListUser;
