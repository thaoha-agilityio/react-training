import React from 'react';

// Components
import Button from '../Button';
import DropdownMenu from '../DropdownMenu';
import { OPTIONS_ROLE, OPTIONS_STATUS } from '../../constants/dropdown';
import arrowIcon from '../../assets/images/arrowIcon.jpg';
import closeIcon from '../../assets/images/closeIcon.jpg';
import { IProject } from '../../types/IUser';

// CSS
import './index.css';
import Input from '../Input';
import { PROJECT } from '../../constants/user';

interface IProps {
  onClose: () => void;
  onConfirm?: (event: React.FormEvent) => void;
  message?: string;
  defaultValue?: IProject;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  name?: string;
}

class Modal extends React.Component<IProps> {
  state = { isChecked: false };

  toggleIsChecked = (): boolean => {
    this.setState({ isChecked: !this.state.isChecked });

    return this.state.isChecked;
  };

  render() {
    const { onClose, onConfirm, message } = this.props;
    const { isChecked } = this.state;

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
            <form className="form" onSubmit={onConfirm}>
              <div className="modal-form">
                {/* ================================ */}

                <div className="form-group">
                  <div className="form-control">
                    <Input
                      type="checkbox"
                      onChange={this.toggleIsChecked}
                      checked={isChecked}
                      name={PROJECT.NIKE_SNEAKER}
                    />
                    <label className="nike-sneaker">nike sneakers</label>
                  </div>
                  <div className="form-control">
                    <DropdownMenu options={OPTIONS_ROLE} size="small" name="role" />
                  </div>
                  <div className="form-control">
                    <DropdownMenu options={OPTIONS_STATUS} size="small" name="status" />
                  </div>
                </div>
                {/* ================================ */}
                <div className="form-group">
                  <div className="form-control">
                    <Input
                      type="checkbox"
                      onChange={this.toggleIsChecked}
                      checked={isChecked}
                      name={PROJECT.NETFLIX}
                    />
                    <label className="netflix">netflix</label>
                  </div>
                  <div className="form-control">
                    <DropdownMenu options={OPTIONS_ROLE} size="small" name="role" />
                  </div>
                  <div className="form-control">
                    <DropdownMenu options={OPTIONS_STATUS} size="small" name="status" />
                  </div>
                </div>
                {/* ==================================== */}
                <div className="form-group">
                  <div className="form-control">
                    <Input
                      type="checkbox"
                      onChange={this.toggleIsChecked}
                      checked={isChecked}
                      name={PROJECT.LIBRA}
                    />
                    <label className="libra">libra</label>
                  </div>
                  <div className="form-control">
                    <DropdownMenu options={OPTIONS_ROLE} size="small" name="role" />
                  </div>
                  <div className="form-control">
                    <DropdownMenu options={OPTIONS_STATUS} size="small" name="status" />
                  </div>
                </div>
                {/* ============================ */}
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
  }
}

export default Modal;
