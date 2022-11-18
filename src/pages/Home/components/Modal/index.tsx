// Components
import Button from '../../../../components/Button';
import RowProject from '../RowProject';

import arrowIcon from '../../../../assets/images/arrowIcon.jpg';
import closeIcon from '../../../../assets/images/closeIcon.jpg';
import { IProject } from '../../../../types/IUser';
import { PROJECT } from '../../../../constants/user';

// CSS
import './index.css';

interface IProps {
  name?: string;
  message?: string;
  defaultValue?: IProject[];
  onCloseDialog: () => void;
  onClose: () => void;
  onConfirm?: (event: React.FormEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Modal = ({
  message,
  defaultValue,
  onClose,
  onChange,
  onConfirm,
  onCloseDialog,
}: IProps): React.ReactElement => {
  // Submit form
  const handleSubmit = (event: React.FormEvent): void => {
    if (!onConfirm) {
      return;
    }

    onConfirm(event);

    // Close modal
    onClose();
    // Close dialog
    onCloseDialog();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">
            <p>{message}</p>
          </div>
          <div className="close-modal">
            <button onClick={onClose}>
              <img src={closeIcon} alt="vector" />
            </button>
          </div>
        </div>
        <div className="modal-content">
          <div className="sub-title">
            <p>project</p>
            <p>role</p>
            <p>status</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="modal-form">
              <RowProject
                name={PROJECT.NIKE_SNEAKER}
                defaultValues={defaultValue}
                className="nike-sneaker"
                onChange={onChange}
              />

              <RowProject
                name={PROJECT.NETFLIX}
                defaultValues={defaultValue}
                className="netflix"
                onChange={onChange}
              />

              <RowProject
                name={PROJECT.LIBRA}
                defaultValues={defaultValue}
                className="libra"
                onChange={onChange}
              />
            </div>
            <div className="form-group-btn">
              <Button variant="primary" size="medium" type="submit">
                done <img src={arrowIcon} alt="icon" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
