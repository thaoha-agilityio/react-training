import React from 'react';

import Avatar from '../../Avatar';
import { IProject, IUser } from '../../../types/IUser';
import moreVert from '../../../assets/images/moreVertIcon.jpg';
import RowMore from '../RowMore';
import TableListCell from '../TableListCell';
import Dialog from '../../Dialog';
import { ROLE, STATUS } from '../../../constants/user';

import './index.css';

interface IProps {
  user: IUser;
  order: number;
  users: IUser[];
  onDelete: (id: string) => void;
}

interface IProjects {
  [key: string]: Omit<IProject, 'id'> | undefined;
}

interface IState {
  isDialogOpen: boolean;
  isLoadMore: boolean;
  valueProjects?: IProjects;
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
        },
      }),
      {}
    ),
  };

  // Set state for load more
  handleToggleLoadMore = (): void => {
    this.setState({ isLoadMore: !this.state.isLoadMore });
  };

  //Show dialog
  handleToggleDialog = (): void => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  };

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
                role: ROLE.DESIGNER,
                status: STATUS.TO_DO,
              }
            : undefined,
        },
      });
    } else {
      const { valueProjects } = this.state;

      if (!valueProjects) {
        return;
      }
      // if (valueProjects) {
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
          },
        },
      });
      // }
    }
  };

  handleOnUpdate = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(this.state.valueProjects);
  };

  render(): React.ReactNode {
    const { id, name, email, avatar, projects } = this.props.user;
    const { order, users, onDelete } = this.props;
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
          <TableListCell listProject={projects as IProject[]} hasLoadMore={this.state.isLoadMore} />

          <td>
            <a className="action" onClick={this.handleToggleDialog}>
              <img src={moreVert} />
            </a>

            <Dialog
              users={users}
              idUser={id}
              onDelete={onDelete}
              projects={projects as IProject[]}
              isOpen={this.state.isDialogOpen}
              onChange={this.handleOnchange}
              onUpdate={this.handleOnUpdate}
            />
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
