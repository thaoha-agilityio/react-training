import React from 'react';

import moreVert from '../../assets/images/moreVertIcon.png';
import Avatar from '../Avatar';
import { IUser } from '../../types/IUser';
import './index.css';

export interface IUserRowProps {
  user: IUser;
  order: number;
}

class TableUserRow extends React.Component<IUserRowProps> {
  renderCell = <T, K extends keyof T, V extends keyof T>(data: T[] | undefined, key: K, id: V) => {
    //Check data empty
    if (!data) {
      return '';
    }

    return data.map((item: T) => <p key={item[id] as string}>{item[key] as string}</p>);
  };

  render(): React.ReactNode {
    const { name, email, avatar, projects } = this.props.user;

    const { order } = this.props;

    return (
      <tbody className="table-body">
        <tr>
          <td>{order}</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} alt="avatar" />
          </td>
          <td>{email}</td>

          <td>{this.renderCell(projects, 'projectName', 'id')}</td>
          <td>{this.renderCell(projects, 'role', 'id')}</td>
          <td>{this.renderCell(projects, 'status', 'id')}</td>

          <td>
            <img src={moreVert} />
          </td>
        </tr>
      </tbody>
    );
  }
}

export default TableUserRow;
