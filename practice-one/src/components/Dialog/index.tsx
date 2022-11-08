import React from 'react';
import { IUser } from '../../types/IUser';

import ConfirmModal from '../ConfirmModal';

import './index.css';

interface IProps {
  idUser: string;
  users: IUser[];
  onDelete: (users: IUser[], idUser: string) => void;
}

class Dialog extends React.Component<IProps> {
  state = { stateShowModal: false, listData: this.props.users };

  handleShowModal = (): void => {
    this.setState({ stateShowModal: true });
  };

  toggleConfirm = (): void => {
    this.setState({ stateShowModal: false });
  };

  render() {
    const { users, idUser, onDelete } = this.props;

    return (
      <>
        <div className="dialog">
          <a>Update User</a>
          <a onClick={this.handleShowModal}>Delete User</a>
        </div>
        {this.state.stateShowModal && (
          <ConfirmModal
            handleClose={this.toggleConfirm}
            users={users}
            id={idUser}
            handleConfirm={onDelete}
          />
        )}
      </>
    );
  }
}

export default Dialog;
