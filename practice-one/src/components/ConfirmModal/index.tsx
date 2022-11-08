import React from 'react';

// Components
import Button from '../Button';
import closeIcon from '../../assets/images/closeIcon.jpg';

// Css
import './index.css';
import { IUser } from '../../types/IUser';

interface IProps {
  handleClose: () => void;
  handleConfirm: (data: IUser[], id: string) => void;
  users: IUser[];
  id: string;
}

class ConfirmModal extends React.Component<IProps> {
  render() {
    const { handleClose, id, users, handleConfirm } = this.props;

    return (
      <div className="overlay">
        <div className="modal">
          <div className="closeModal">
            <a onClick={handleClose}>
              <img src={closeIcon} alt="icon" />
            </a>
          </div>
          <p>Are you sure you wanna delete this ?</p>
          <div className="button-wrapper">
            <Button variant="primary" size="small" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="secondary" size="small" onClick={() => handleConfirm(users, id)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmModal;
