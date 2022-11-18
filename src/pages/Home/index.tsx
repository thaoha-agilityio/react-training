import React from 'react';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DropdownMenu from '../../components/DropdownMenu';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import UserList from './components/Table/UserList';

import { OPTIONS_ROLE, OPTIONS_PROJECT } from '../../constants/dropdown';
import { avatars, userNames, users, emails } from '../../mocks/users';
import { IUser } from '../../types/IUser';
import { createID } from '../../helpers/createId';
import { random } from '../../helpers/random';

// CSS
import './index.css';

interface IProps {
  children?: React.ReactNode;
}

interface IState {
  isOpened: boolean;
  value: string;
  users: IUser[];
  selectedFilter: IUser[];
  updateUsers: IUser[];
}

class Home extends React.Component<IProps, IState> {
  state = {
    isOpened: false,
    users: users,
    value: '',
    selectedFilter: [],
    updateUsers: [],
  };

  // Add a user in data
  handleAddUser = (): void => {
    const newUser: IUser = {
      id: createID(),
      name: random(userNames),
      email: random(emails),
      avatar: random(avatars),
    };

    this.setState({ users: [...this.state.users, newUser] });
  };

  // Delete by Id
  handleDeleteUser = (id: string): void => {
    const currentUserList = this.state.users.filter((item) => item.id !== id);

    this.setState({ users: currentUserList });
  };

  // Search by name
  handleSearchUser = (event: React.FormEvent<HTMLInputElement>): void => {
    // Get value input
    const inputValue = event.currentTarget.value;

    this.setState({ value: inputValue });

    const { users } = this.state;

    // Check input value empty
    if (inputValue.length === 0) {
      this.setState({ isOpened: false });

      return;
    }

    this.setState({ isOpened: true });

    const searchList = users.filter((item: IUser) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    this.setState({ updateUsers: searchList });
  };

  // Get value input
  handleChangeInput = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value });
  };

  // Handle filter user by role
  handleFilterUserByRole = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { users } = this.state;

    // get project name from value dropdown
    const valueSelected = event.target.value;

    const usersFilter = users.filter((item: IUser) =>
      item.projects?.some((value) => value.role === valueSelected)
    );

    this.setState({ selectedFilter: usersFilter });
  };

  // Handle filter user by role & project name
  handleFilterUserByProject = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { selectedFilter } = this.state;
    const values = event.target.value;

    const usersFilter = selectedFilter.filter((item: IUser) =>
      item.projects?.some((value) => value.projectName === values)
    );

    this.setState({ users: usersFilter });
  };

  render(): React.ReactNode {
    const { value, users, updateUsers, isOpened } = this.state;

    return (
      <div className="container">
        <Header />
        <div className="content">
          <div className="dropdown">
            <h2>Search filter</h2>
            <div className="dropdown-menu">
              <DropdownMenu
                options={OPTIONS_ROLE}
                size="medium"
                onChange={this.handleFilterUserByRole}
              />
              <DropdownMenu
                options={OPTIONS_PROJECT}
                size="medium"
                onChange={this.handleFilterUserByProject}
              />
            </div>
          </div>
          <div className="main-content">
            <div className="page-wrapper">
              <TextField
                type="text"
                placeholder="Search name..."
                onChange={this.handleSearchUser}
                value={value}
              />

              <Button variant="primary" size="medium" onClick={this.handleAddUser}>
                Add User
              </Button>
            </div>
            <UserList userList={isOpened ? updateUsers : users} onDelete={this.handleDeleteUser} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
