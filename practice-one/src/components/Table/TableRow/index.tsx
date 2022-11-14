import React from 'react';

import Avatar from '../../Avatar';
import moreVert from '../../../assets/images/moreVertIcon.jpg';
import RowMore from '../RowMore';
import TableListCell from '../TableListCell';
import Dialog from '../../Dialog';
import { IProject, IUser } from '../../../types/IUser';

import { ROLE, STATUS } from '../../../constants/user';
import { createID } from '../../../helpers/createId';

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
  projectList: IProject[];
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
    projectList: this.props.user.projects as IProject[],
  };

  // Set state for load more
  handleToggleLoadMore = (): void => {
    this.setState({ isLoadMore: !this.state.isLoadMore });
  };

  // Show dialog
  handleToggleDialog = (): void => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  };

  // Get value from form modal
  handleOnchange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const element = event.target;
    const nameProject = element.name;

    if (element.className.includes('checkbox')) {
      const checkbox = element as HTMLInputElement;

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

  render(): React.ReactNode {
    const { id, name, email, avatar, projects } = this.props.user;
    const { order, onDelete } = this.props;
    const shouldShowLoadMore = !(!projects || projects.length <= 2);

    console.log(this.state.isDialogOpen);

    return (
      <>
        <tr>
          <td>{order}</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} alt="avatar" />
          </td>
          <td>{email}</td>
          {/* Render data of Role, Project, Status */}
          <TableListCell listProject={projects as IProject[]} hasLoadMore={this.state.isLoadMore} />

          <td>
            <button className="action" onClick={this.handleToggleDialog}>
              <img src={moreVert} />
            </button>

            {this.state.isDialogOpen && (
              <Dialog
                idUser={id}
                onDelete={onDelete}
                projects={projects as IProject[]}
                onChange={this.handleOnchange}
                onUpdate={this.handleOnUpdateProject}
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
