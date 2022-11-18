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
  value: string;
  userList: IUser[];
  selectedFilter: IUser[];
}

class Home extends React.Component<IProps, IState> {
  state = {
    userList: users,
    value: '',
    selectedFilter: [],
  };

  // Add a user in data
  handleAddUser = (): void => {
    const newUser: IUser = {
      id: createID(),
      name: random(userNames),
      email: random(emails),
      avatar: random(avatars),
    };

    this.setState({ userList: [...this.state.userList, newUser] });
  };

  // Delete by Id
  handleDeleteUser = (id: string): void => {
    const currentUserList = this.state.userList.filter((item) => item.id !== id);

    this.setState({ userList: currentUserList });
  };

  // Search by name
  handleSearchUser = (): void => {
    const { userList } = this.state;

    const searchList = userList.filter(
      (item: IUser) => item.name.toLowerCase().search(this.state.value.toLowerCase()) >= 0
    );

    this.setState({ userList: searchList });
  };

  // Get value input
  handleChangeInput = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value });
  };

  // Handle filter user by role
  handleFilterUserByRole = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { userList } = this.state;

    // get project name from value dropdown
    const valueSelected = event.target.value;

    const usersFilter = userList.filter((item: IUser) =>
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

    this.setState({ userList: usersFilter });
  };

  render(): React.ReactNode {
    const { value, userList } = this.state;

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
                onChange={this.handleChangeInput}
                onClick={this.handleSearchUser}
                value={value}
              />

              <Button variant="primary" size="medium" onClick={this.handleAddUser}>
                Add User
              </Button>
            </div>
            <UserList userList={userList} onDelete={this.handleDeleteUser} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
