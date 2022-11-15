import React from 'react';

import DropdownMenu from '../DropdownMenu';
import Input from '../Input';

import { OPTIONS_ROLE, OPTIONS_STATUS } from '../../constants/dropdown';
import { IProject } from '../../types/IUser';

interface IProps {
  name: string;
  defaultValues?: IProject[];
  className?: 'nike-sneaker' | 'netflix' | 'libra';
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface IState {
  isChecked: boolean;
}

class RowProject extends React.Component<IProps, IState> {
  state = {
    isChecked: !!this.props.defaultValues?.find((value) => value.projectName === this.props.name),
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isChecked: e.target.checked });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    const { name, defaultValues, className, onChange } = this.props;
    const { isChecked } = this.state;
    const matchProject = defaultValues?.find((value) => value.projectName === name);

    return (
      <div className="form-group">
        <div className="form-control">
          <Input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleChange}
            name={name}
            className="checkbox"
            value={name}
          />
          <label className={`${className}`}>{name}</label>
        </div>
        <div className="form-control">
          <DropdownMenu
            options={OPTIONS_ROLE}
            size="small"
            name={name}
            defaultValue={isChecked ? matchProject?.role : undefined}
            disabled={!isChecked}
            onChange={onChange}
            className="menu role"
          />
        </div>
        <div className="form-control">
          <DropdownMenu
            options={OPTIONS_STATUS}
            size="small"
            name={name}
            defaultValue={isChecked ? matchProject?.status : undefined}
            disabled={!isChecked}
            onChange={onChange}
            className="menu status"
          />
        </div>
      </div>
    );
  }
}

export default RowProject;
