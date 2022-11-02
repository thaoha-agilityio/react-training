import React from 'react';

import moreVert from '../../assets/images/moreVertIcon.png';
import Avatar from '../Avatar';

import './index.css';
import { IUser } from '../../types/IUser';

export interface IUserRowProps {
  user: IUser;
  index: number;
}

class TableUserRow extends React.Component<IUserRowProps> {
  render(): React.ReactNode {
    const { name, email, avatar, role, project, status } = this.props.user;
    const { index } = this.props;

    return (
      <tbody className="table-body">
        <tr>
          <td>{index + 1}</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} alt="avatar" />
          </td>
          <td>{email}</td>
          <td>
            <p>{role}</p>
          </td>
          <td>
            <p>{project}</p>
          </td>
          <td>
            <p>{status}</p>
          </td>
          <td>
            <img src={moreVert} />
          </td>
        </tr>
      </tbody>
    );
  }
}

export default TableUserRow;
