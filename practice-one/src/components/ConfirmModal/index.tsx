import React from 'react';

// Components
import Button from '../Button';
import closeIcon from '../../assets/images/closeIcon.jpg';

// Css
import './index.css';

const ConfirmModal = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="closeModal">
          <a>
            <img src={closeIcon} alt="icon" />
          </a>
        </div>
        <p>Are you sure you wanna delete this ?</p>
        <div className="button-wrapper">
          <Button variant="primary" size="small">
            Cancel
          </Button>
          <Button variant="secondary" size="small">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
