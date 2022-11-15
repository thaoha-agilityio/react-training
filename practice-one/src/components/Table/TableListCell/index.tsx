import React from 'react';

import { IProject } from '../../../types/IUser';

interface IProps {
  listProject: IProject[];
  hasLoadMore: boolean;
}

const TableListCell = ({ listProject, hasLoadMore }: IProps): React.ReactElement => {
  // Render data table cell
  const renderCell = <T, K extends keyof T, V extends keyof T>(
    data: T[] | undefined,
    key: K,
    id: V
  ) => {
    //Check data empty
    if (!data) {
      return '';
    }

    // Get first 2 element or all element
    const loadCount = hasLoadMore ? data.length : 2;

    return data
      .slice(0, loadCount)
      .map((item: T) => (item ? <p key={item[id] as string}>{item[key] as string}</p> : null));
  };

  return (
    <>
      <td>{renderCell(listProject, 'role', 'id')}</td>
      <td>{renderCell(listProject, 'projectName', 'id')}</td>
      <td>{renderCell(listProject, 'status', 'id')}</td>
    </>
  );
};

export default TableListCell;
