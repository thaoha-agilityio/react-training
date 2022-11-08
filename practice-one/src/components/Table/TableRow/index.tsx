import React from 'react';

import Avatar from '../../Avatar';
import { IProject, IUser } from '../../../types/IUser';
import moreVert from '../../../assets/images/moreVertIcon.jpg';
import RowMore from '../RowMore';
import TableListCell from '../TableListCell';

import './index.css';
import Dialog from '../../Dialog';

export interface IUserRowProps {
  user: IUser;
  order: number;
  users: IUser[];
  onDelete: (users: IUser[], id: string) => void;
}

class TableUserRow extends React.Component<IUserRowProps> {
  state = { stateDialog: false, loadMore: false };

  // Set state for load more
  handleToggleLoadMore = (): void => {
    this.setState({ loadMore: !this.state.loadMore });
  };

  //Show dialog
  handleToggleDialog = (): void => {
    this.setState({ stateDialog: !this.state.stateDialog });
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
          <TableListCell listProject={projects as IProject[]} hasLoadMore={this.state.loadMore} />

          <td>
            <a className="action" onClick={this.handleToggleDialog}>
              <img src={moreVert} />
            </a>
            {this.state.stateDialog && <Dialog users={users} idUser={id} onDelete={onDelete} />}
          </td>
        </tr>

        {shouldShowLoadMore && (
          <RowMore onClick={this.handleToggleLoadMore} hasLoadMore={this.state.loadMore} />
        )}
      </>
    );
  }
}

export default TableUserRow;
