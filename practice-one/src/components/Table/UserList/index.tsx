import React from 'react';

import TableUserRow from '../TableRow';
import TableHeader from '../TableHeader';
import { IUser } from '../../../types/IUser';
import { listCell } from '../../../constants/table';
import './index.css';

interface IProps {
  list: IUser[];
}

class UserList extends React.Component<IProps> {
  state = { userList: this.props.list };

  // Delete by Id
  handleDeleteUser = (users: IUser[], id: string): void => {
    const currentUserList = users.filter((item) => item.id !== id);

    this.setState({ userList: currentUserList });
  };

  renderRow = (listRow: IUser[]): JSX.Element[] => {
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
          <tbody className="table-body">{this.renderRow(this.state.userList)}</tbody>
        </table>
      </>
    );
  }
}

export default UserList;
