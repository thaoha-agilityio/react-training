import React from 'react';
import { IUser } from '../../types/IUser';

import ConfirmModal from '../ConfirmModal';
import { TITLE_MESSAGE } from '../../constants/message';
import './index.css';
import Button from '../Button';

interface IProps {
  idUser: string;
  users: IUser[];

  onDelete: (users: IUser[], idUser: string) => void;
}

class Dialog extends React.Component<IProps> {
  state = { stateModal: false, listData: this.props.users };

  handleShowModal = (): void => {
    this.setState({ stateModal: true });
  };

  toggleConfirm = (): void => {
    this.setState({ stateModal: false });
  };

  render() {
    const { users, idUser, onDelete } = this.props;

    return (
      <>
        <div className="dialog">
          <Button variant="normal" size="small">
            Update User
          </Button>
          <Button onClick={this.handleShowModal} variant="normal" size="small">
            Delete User
          </Button>
        </div>
        {this.state.stateModal && (
          <ConfirmModal
            handleClose={this.toggleConfirm}
            users={users}
            id={idUser}
            handleConfirm={onDelete}
            mainMessage={TITLE_MESSAGE}
          />
        )}
      </>
    );
  }
}

export default Dialog;
