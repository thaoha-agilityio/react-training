// Component
import Button from '../Button';

import closeIcon from '../../assets/images/closeIcon.jpg';

// Css
import './index.css';

interface IProps {
  message: string;
  text: string;
  onClose: () => void;
  onConfirm?: () => void;
}

const ConfirmModal = ({ onClose, onConfirm, message, text }: IProps): React.ReactElement => (
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
        <Button
          variant={text === 'delete' ? 'danger' : 'primary'}
          size="small"
          onClick={() => onConfirm?.()}
        >
          {text}
        </Button>
      </div>
    </div>
  </div>
);

export default ConfirmModal;
