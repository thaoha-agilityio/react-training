import TableUserRow from '../TableRow';
import TableHeader from '../TableHeader';

import { IUser } from '../../../../../types/IUser';
import { LIST_CELL } from '../../../../../constants/table';

import './index.css';

interface IProps {
  userList: IUser[];
  onDelete: (id: string) => void;
  message?: string;
}

const UserList = ({ userList, onDelete, message }: IProps): React.ReactElement => {
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
    <>
      <table className="table">
        <TableHeader columns={LIST_CELL} />
        <tbody className="table-body">{renderRow(userList)}</tbody>
      </table>
      <p className="message">{message}</p>
    </>
  );
};

export default UserList;
