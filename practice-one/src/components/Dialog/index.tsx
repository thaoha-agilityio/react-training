import React from 'react';

import ConfirmModal from '../ConfirmModal';

import './index.css';
interface IProps {
  idUser?: string;
}
class Dialog extends React.Component<IProps> {
  state = { stateShowModal: false };

  handleShowModal = () => {
    this.setState({ stateShowModal: true });
  };

  toggleConfirm = () => {
    this.setState({ stateShowModal: false });
  };

  handleDeleteUser = () => {
    console.log(123);
  };

  render() {
    const { idUser } = this.props;
    console.log(idUser);
    return (
      <>
        <div className="dialog">
          <a>Update User</a>
          <a onClick={this.handleShowModal}>Delete User</a>
        </div>
        {this.state.stateShowModal && <ConfirmModal />}
      </>
    );
  }
}

export default Dialog;
