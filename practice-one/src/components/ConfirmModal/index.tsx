import React from 'react';

// Components
import Button from '../Button';
import closeIcon from '../../assets/images/closeIcon.jpg';

// Css
import './index.css';
import { IUser } from '../../types/IUser';

interface IProps {
  id: string;
  users: IUser[];
  message: string;
  onClose: () => void;
  onConfirm: (id: string) => void;
}

const ConfirmModal = ({ onClose, id, onConfirm, message }: IProps): React.ReactElement => (
  <div className="overlay">
    <div className="confirm-modal">
      <div className="close-modal">
        <a onClick={onClose}>
          <img src={closeIcon} alt="icon" />
        </a>
      </div>
      <p>{message}</p>
      <div className="button-wrapper">
        <Button variant="secondary" size="small" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" size="small" onClick={() => onConfirm(id)}>
          Save
        </Button>
      </div>
    </div>
  </div>
);

export default ConfirmModal;
