import React from 'react';

// Components
import Button from '../Button';
import RowProject from '../RowProject';

import arrowIcon from '../../assets/images/arrowIcon.jpg';
import closeIcon from '../../assets/images/closeIcon.jpg';
import { IProject } from '../../types/IUser';
import { PROJECT } from '../../constants/user';

// CSS
import './index.css';

interface IProps {
  name?: string;
  message?: string;
  defaultValue?: IProject[];

  onClose: () => void;
  onConfirm?: (event: React.FormEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface IState {
  isChecked: boolean;
  valueSelected: string;
}

class Modal extends React.Component<IProps, IState> {
  state = { isChecked: false, valueSelected: '' };

  toggleIsChecked = (): boolean => {
    this.setState({ isChecked: !this.state.isChecked });

    return this.state.isChecked;
  };

  handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;

    this.setState({ valueSelected: value });
  };

  render() {
    const { message, defaultValue, onClose, onConfirm, onChange } = this.props;

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
  }
}

export default Modal;
