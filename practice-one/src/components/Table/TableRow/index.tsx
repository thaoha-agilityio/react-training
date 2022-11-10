import React from 'react';

import Avatar from '../../Avatar';
import { IProject, IUser } from '../../../types/IUser';
import moreVert from '../../../assets/images/moreVertIcon.jpg';
import RowMore from '../RowMore';
import TableListCell from '../TableListCell';
import Dialog from '../../Dialog';

import './index.css';

interface IProps {
  user: IUser;
  order: number;
  users: IUser[];
  onDelete: (id: string) => void;
}

interface IState {
  isDialogOpen: boolean;
  isLoadMore: boolean;
}

class TableUserRow extends React.Component<IProps, IState> {
  state = { isDialogOpen: false, isLoadMore: false };

  // Set state for load more
  handleToggleLoadMore = (): void => {
    this.setState({ isLoadMore: !this.state.isLoadMore });
  };

  //Show dialog
  handleToggleDialog = (): void => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  };

  render(): React.ReactNode {
    const { id, name, email, avatar, projects } = this.props.user;
    const { order, users, onDelete } = this.props;
    const shouldShowLoadMore = !(!projects || projects.length <= 2);

    return (
      <>
        <tr>
          <td>{order}</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} alt="avatar" />
          </td>
          <td>{email}</td>
          {/* Render data of Role, Project, Status */}
          <TableListCell listProject={projects as IProject[]} hasLoadMore={this.state.isLoadMore} />

          <td>
            <a className="action" onClick={this.handleToggleDialog}>
              <img src={moreVert} />
            </a>
            {this.state.isDialogOpen && <Dialog users={users} idUser={id} onDelete={onDelete} />}
          </td>
        </tr>
        {shouldShowLoadMore && (
          <RowMore onClick={this.handleToggleLoadMore} hasLoadMore={this.state.isLoadMore} />
        )}
      </>
    );
  }
}

export default TableUserRow;
