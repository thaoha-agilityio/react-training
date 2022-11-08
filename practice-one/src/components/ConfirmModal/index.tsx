import React from 'react';

// Components
import Button from '../Button';
import closeIcon from '../../assets/images/closeIcon.jpg';

// Css
import './index.css';
import { IUser } from '../../types/IUser';

interface IProps {
  onClose: () => void;
  onConfirm: (data: IUser[], id: string) => void;
  users: IUser[];
  id: string;
  message: string;
}

const ConfirmModal = ({ onClose, id, users, onConfirm, message }: IProps): React.ReactElement => (
  <div className="overlay">
    <div className="modal">
      <div className="closeModal">
        <a onClick={onClose}>
          <img src={closeIcon} alt="icon" />
        </a>
      </div>
      <p>{message}</p>
      <div className="button-wrapper">
        <Button variant="secondary" size="small" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" size="small" onClick={() => onConfirm(users, id)}>
          Save
        </Button>
      </div>
    </div>
  </div>
);

export default ConfirmModal;
