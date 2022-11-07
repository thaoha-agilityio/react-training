import React from 'react';

import { IProject } from '../../../types/IUser';

interface IProps {
  listProject: IProject[];
  loadMore: boolean;
}

type ProjectRender = Partial<IProps>;

class TableListCell extends React.Component<ProjectRender, IProps> {
  // Render data table cell
  renderCell = <T, K extends keyof T, V extends keyof T>(data: T[] | undefined, key: K, id: V) => {
    //Check data empty
    if (!data) {
      return '';
    }

    // Get first 2 element or all element
    const loadCount = this.props.loadMore ? data.length : 2;

    return data
      .slice(0, loadCount)
      .map((item: T) => <p key={item[id] as string}>{item[key] as string}</p>);
  };

  render(): React.ReactNode {
    const { listProject } = this.props;

    return (
      <>
        <td>{this.renderCell(listProject, 'role', 'id')}</td>
        <td>{this.renderCell(listProject, 'projectName', 'id')}</td>
        <td>{this.renderCell(listProject, 'status', 'id')}</td>
      </>
    );
  }
}

export default TableListCell;
