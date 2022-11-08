import React from 'react';
import { IUser } from '../../types/IUser';

import ConfirmModal from '../ConfirmModal';
import Button from '../Button';
import { TITLE_MESSAGE } from '../../constants/message';

import './index.css';

interface IProps {
  idUser: string;
  users: IUser[];
  onDelete: (users: IUser[], idUser: string) => void;
}

class Dialog extends React.Component<IProps> {
  state = { isModalOpen: false, listData: this.props.users };

  handleToggleModal = (): void => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { users, idUser, onDelete } = this.props;

    return (
      <>
        <div className="dialog">
          <Button variant="normal" size="small">
            Update User
          </Button>
          <Button onClick={this.handleToggleModal} variant="normal" size="small">
            Delete User
          </Button>
        </div>
        {/* Show confirm nodal */}
        {this.state.isModalOpen && (
          <ConfirmModal
            onClose={this.handleToggleModal}
            users={users}
            id={idUser}
            onConfirm={onDelete}
            message={TITLE_MESSAGE}
          />
        )}
      </>
    );
  }
}

export default Dialog;
