import React from 'react';

import ConfirmModal from '../ConfirmModal';
import Button from '../Button';
import Modal from '../Modal';

import { IProject, IUser } from '../../types/IUser';
import { TITLE_MESSAGE } from '../../constants/message';

import './index.css';

interface IProps {
  idUser: string;
  users: IUser[];
  projects: IProject[];
  onDelete: (idUser: string) => void;
}

interface IState {
  isModalOpen: boolean;
  isConfirmModalOpen: boolean;
}

class Dialog extends React.Component<IProps, IState> {
  state = { isModalOpen: false, isConfirmModalOpen: false };

  handleToggleConfirmModal = (): void => {
    this.setState({ isConfirmModalOpen: !this.state.isConfirmModalOpen });
  };

  handleToggleModal = (): void => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { users, idUser, projects, onDelete } = this.props;

    return (
      <>
        <div className="dialog">
          <Button variant="normal" size="small" onClick={this.handleToggleModal}>
            Update User
          </Button>
          <Button onClick={this.handleToggleConfirmModal} variant="normal" size="small">
            Delete User
          </Button>
        </div>
        {/* Show confirm modal */}
        {this.state.isConfirmModalOpen && (
          <ConfirmModal
            onClose={this.handleToggleConfirmModal}
            users={users}
            id={idUser}
            onConfirm={onDelete}
            message={TITLE_MESSAGE}
          />
        )}

        {/* Show modal */}
        {this.state.isModalOpen && (
          <Modal onClose={this.handleToggleModal} message="add project" defaultValue={projects} />
        )}
      </>
    );
  }
}

export default Dialog;
