import { IProject } from '../../../../../types/IUser';

interface IProps {
  listProject: IProject[];
  hasLoadMore: boolean;
}

const TableListCell = ({ listProject, hasLoadMore }: IProps): React.ReactElement => {
  // Render data table cell
  const renderCell = <T extends { id: string }, K extends keyof T>(key: K, data?: T[]) => {
    // Check data empty
    if (!data) {
      return '';
    }

    // Get first 2 element or all element
    const loadCount = hasLoadMore ? data.length : 2;

    return data
      .slice(0, loadCount)
      .map((item: T) => (item ? <p key={item.id}>{item[key] as string}</p> : null));
  };

  return (
    <>
      <td>{renderCell('role', listProject)}</td>
      <td>{renderCell('projectName', listProject)}</td>
      <td>{renderCell('status', listProject)}</td>
    </>
  );
};

export default TableListCell;
