import React from 'react';

import moreVert from '../../assets/images/moreVert.png';
import Avatar from '../Avatar';
import { IUser } from '../../types/IUsers';
import { ROLE, PROJECT, STATUS } from '../../constants/user';
import './index.css';

class TableUserRow extends React.Component {
  render(): React.ReactNode {
    // Render data in view
    const dataUser: IUser = {
      id: '1',
      name: 'user1',
      email: 'use1@gmail.com',
      role: ROLE.DESIGNER,
      project: PROJECT.LIBRA,
      status: STATUS.DONE,
      avatar:
        'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
    };

    const { name, email, role, project, status, avatar } = dataUser;

    return (
      <tbody className="table-body">
        <tr>
          <td>1</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} />
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
