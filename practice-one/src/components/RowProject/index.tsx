import React from 'react';

import DropdownMenu from '../DropdownMenu';
import Input from '../Input';

import { OPTIONS_ROLE, OPTIONS_STATUS } from '../../constants/dropdown';
import { IProject } from '../../types/IUser';

interface IProps {
  name: string;
  defaultValues?: IProject[];
  variant?: 'nike-sneaker' | 'netflix' | 'libra';
}

const RowProject = ({ name, defaultValues, variant }: IProps) => {
  console.log(name, !!defaultValues?.find((value) => value.projectName === name));

  return (
    <div className="form-group">
      <div className="form-control">
        <Input
          type="checkbox"
          checked={!!defaultValues?.find((value) => value.projectName === name)}
          name={name}
        />
        <label className={`${variant}`}>{name}</label>
      </div>
      <div className="form-control">
        <DropdownMenu
          options={OPTIONS_ROLE}
          size="small"
          name="role"
          defaultValue={defaultValues?.find((value) => value.projectName === name)?.role}
        />
      </div>
      <div className="form-control">
        <DropdownMenu
          options={OPTIONS_STATUS}
          size="small"
          name="status"
          defaultValue={defaultValues?.find((value) => value.projectName === name)?.status}
        />
      </div>
    </div>
  );
};

export default RowProject;
