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
  mainMessage: string;
}

const ConfirmModal = ({
  handleClose,
  id,
  users,
  handleConfirm,
  mainMessage,
}: IProps): React.ReactElement => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="closeModal">
          <a onClick={handleClose}>
            <img src={closeIcon} alt="icon" />
          </a>
        </div>
        <p>{mainMessage}</p>
        <div className="button-wrapper">
          <Button variant="primary" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" size="small" onClick={() => handleConfirm(users, id)}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
