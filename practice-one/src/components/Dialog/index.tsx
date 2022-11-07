import React from 'react';
import { IUser } from '../../types/IUser';

import ConfirmModal from '../ConfirmModal';

import './index.css';

interface IProps {
  idUser: string;
  onDelete: (data: IUser[], idUser: string) => void;
  data: IUser[];
}

class Dialog extends React.Component<IProps> {
  state = { stateShowModal: false, listData: this.props.data };

  handleShowModal = (): void => {
    this.setState({ stateShowModal: true });
  };

  toggleConfirm = (): void => {
    this.setState({ stateShowModal: false });
  };

  render() {
    const { data, idUser, onDelete } = this.props;

    return (
      <>
        <div className="dialog">
          <a>Update User</a>
          <a onClick={this.handleShowModal}>Delete User</a>
        </div>
        {this.state.stateShowModal && (
          <ConfirmModal
            handleClose={this.toggleConfirm}
            data={data}
            id={idUser}
            handleConfirm={onDelete}
          />
        )}
      </>
    );
  }
}

export default Dialog;
