import React from 'react';

import Avatar from '../../../../../components/Avatar';
import RowMore from '../RowMore';
import TableListCell from '../TableListCell';
import Dialog from '../../Dialog';

import moreVert from '../../../../../assets/images/moreVertIcon.jpg';
import { IProject, IUser } from '../../../../../types/IUser';
import { ROLE, STATUS } from '../../../../../constants/user';
import { createID } from '../../../../../helpers/createId';

import './index.css';

interface IProps {
  user: IUser;
  order: number;
  users: IUser[];
  onDelete: (id: string) => void;
}

interface IProjects {
  [key: string]: IProject | undefined;
}

interface IState {
  isDialogOpen: boolean;
  isLoadMore: boolean;
  valueProjects?: IProjects;
  projectList?: IProject[];
}

class TableUserRow extends React.Component<IProps, IState> {
  state = {
    isDialogOpen: false,
    isLoadMore: false,
    valueProjects: this.props.user.projects?.reduce(
      (prevP, currentP) => ({
        ...prevP,
        [currentP.projectName]: {
          projectName: currentP.projectName,
          role: currentP.role,
          status: currentP.status,
          id: currentP.id,
        },
      }),
      {}
    ),
    projectList: this.props.user.projects,
  };

  // Get value from form modal
  handleOnchange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    const element = event.target;
    const nameProject = element.name;

    if (element.className.includes('checkbox')) {
      const checkbox = element as HTMLInputElement;

      // Add new project
      this.setState({
        valueProjects: {
          ...this.state.valueProjects,
          [nameProject]: checkbox.checked
            ? {
                projectName: nameProject,
                //Not selected, default value is Designer & To do
                role: ROLE.DESIGNER,
                status: STATUS.TO_DO,
                id: createID(),
              }
            : undefined,
        },
      });
    } else {
      const { valueProjects } = this.state;

      if (!valueProjects) {
        return;
      }

      const project = {
        ...(valueProjects[nameProject as keyof typeof valueProjects] as IProjects),
      };

      // Update project
      this.setState({
        valueProjects: {
          ...valueProjects,
          [nameProject]: {
            ...project,
            role: !element.className.includes('status') ? element.value : project.role,
            status: element.className.includes('status') ? element.value : project.status,
            id: createID(),
          },
        },
      });
    }
  };

  // Submit form update project
  handleOnUpdateProject = (event: React.FormEvent): void => {
    event.preventDefault();

    const { valueProjects } = this.state;
    const { user } = this.props;

    // Assign all projects of user an empty array
    user.projects = [];

    // Convert object to array
    Object.values(valueProjects as IProjects).forEach((value) => {
      if (value) {
        user.projects = [...(user.projects || []), value];
      }
    });
  };

  // Set state for load more
  handleToggleLoadMore = (): void => {
    this.setState({ isLoadMore: !this.state.isLoadMore });
  };

  // Show dialog
  handleToggleDialog = (): void => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  };

  // Close dialog
  handleClose = (): void => {
    this.setState({ isDialogOpen: false });
  };

  render(): React.ReactNode {
    const { id, name, email, avatar, projects } = this.props.user;
    const { order, onDelete } = this.props;

    // Check project empty or <= 2
    const shouldShowLoadMore = !(!projects || projects.length <= 2);

    return (
      <>
        <tr>
          <td>{order}</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} alt="avatar" />
          </td>
          <td>{email}</td>

          {/* Render data of Role, Project, Status */}
          <TableListCell listProject={projects || []} hasLoadMore={this.state.isLoadMore} />

          <td>
            <button className="action" onClick={this.handleToggleDialog}>
              <img src={moreVert} />
            </button>

            {this.state.isDialogOpen && (
              <Dialog
                onDelete={() => onDelete(id)}
                projects={projects || []}
                onChange={this.handleOnchange}
                onUpdate={this.handleOnUpdateProject}
                onCloseDialog={this.handleClose}
              />
            )}
          </td>
        </tr>
        {shouldShowLoadMore && (
          <RowMore onClick={this.handleToggleLoadMore} hasLoadMore={this.state.isLoadMore} />
        )}
      </>
    );
  }
}

export default TableUserRow;
