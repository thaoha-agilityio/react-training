import React from 'react';

import TableUserRow from '../TableRow';
import TableHeader from '../TableHeader';
import { IUser } from '../../../types/IUser';
import { listCell } from '../../../constants/table';
import './index.css';

interface IProps {
  userList: IUser[];
  onDelete: (id: string) => void;
}

const UserList = ({ userList, onDelete }: IProps) => {
  const renderRow = (listRow: IUser[]): JSX.Element[] => {
    return listRow.map((item, index) => (
      <TableUserRow
        key={item.id}
        user={item}
        order={index + 1}
        onDelete={onDelete}
        users={listRow}
      />
    ));
  };

  return (
    <table className="table">
      <TableHeader listCell={listCell} />
      <tbody className="table-body">{renderRow(userList)}</tbody>
    </table>
  );
};

export default UserList;
