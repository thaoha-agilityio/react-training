import React from 'react';

import ConfirmModal from '../../../../components/ConfirmModal';
import Button from '../../../../components/Button';
import Modal from '../Modal';

import { IProject } from '../../../../types/IUser';
import { TITLE_MESSAGE } from '../../../../constants/message';

import './index.css';

interface IProps {
  projects: IProject[];
  onCloseDialog: () => void;
  onDelete: () => void;
  onChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onUpdate: (event: React.FormEvent) => void;
}

interface IState {
  isModalOpen: boolean;
  isConfirmModalOpen: boolean;
}

class Dialog extends React.Component<IProps, IState> {
  state = { isModalOpen: false, isConfirmModalOpen: false };

  // Show/hide confirm modal
  handleToggleConfirmModal = (): void => {
    this.setState({ isConfirmModalOpen: !this.state.isConfirmModalOpen });
  };

  // Show/hide form modal
  handleToggleModal = (): void => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { projects, onDelete, onChange, onUpdate, onCloseDialog } = this.props;

    return (
      <>
        <div className="modal-backdrop" onClick={onCloseDialog}></div>

        <div className="dialog">
          <Button variant="normal" size="small" onClick={this.handleToggleModal}>
            Update project
          </Button>
          <Button onClick={this.handleToggleConfirmModal} variant="normal" size="small">
            Delete User
          </Button>
        </div>

        {/* Show confirm modal */}
        {this.state.isConfirmModalOpen && (
          <ConfirmModal
            text="delete"
            onClose={this.handleToggleConfirmModal}
            onConfirm={onDelete}
            message={TITLE_MESSAGE}
          />
        )}

        {/* Show modal */}
        {this.state.isModalOpen && (
          <Modal
            onClose={this.handleToggleModal}
            message="update project"
            defaultValue={projects}
            onChange={onChange}
            onConfirm={onUpdate}
            onCloseDialog={onCloseDialog}
          />
        )}
      </>
    );
  }
}

export default Dialog;
