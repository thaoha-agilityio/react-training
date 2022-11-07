import React from 'react';

import Avatar from '../../Avatar';
import { IUser } from '../../../types/IUser';
import moreVert from '../../../assets/images/moreVertIcon.jpg';
import RowMore from '../RowMore';
import TableListCell from '../TableListCell';

import './index.css';

export interface IUserRowProps {
  user: IUser;
  order: number;
}

class TableUserRow extends React.Component<IUserRowProps> {
  state = { stateDialog: false, loadMore: false };

  // Set state for load more
  handleLoadMore = () => {
    this.setState({ loadMore: !this.state.loadMore });
  };

  // Show RowMore component
  isShowMore = (): boolean => {
    const { projects } = this.props.user;

    if (!projects || projects.length <= 2) {
      return false;
    }

    return true;
  };

  //Show dialog
  handleShowDialog = () => {
    this.setState({ stateDialog: !this.state.stateDialog });
  };

  render(): React.ReactNode {
    const { name, email, avatar, projects } = this.props.user;
    const { order } = this.props;

    return (
      <>
        <tr>
          <td>{order}</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} alt="avatar" />
          </td>
          <td>{email}</td>
          <TableListCell listProject={projects} hasLoadMore={this.state.loadMore} />

          <td>
            <a className="action" onClick={this.handleShowDialog}>
              <img src={moreVert} />
            </a>
          </td>
        </tr>
        {this.isShowMore() && (
          <RowMore onClick={this.handleLoadMore} hasLoadMore={this.state.loadMore} />
        )}
      </>
    );
  }
}

export default TableUserRow;
