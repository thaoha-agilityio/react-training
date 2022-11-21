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
import { NOTICE_MESSAGE } from '../../constants/message';

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
  valueSelected: object;
}

class Home extends React.Component<IProps, IState> {
  state = {
    isOpened: false,
    users: users,
    value: '',
    selectedFilter: [],
    updateUsers: [],
    valueSelected: { role: '', project: '' },
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
  handleFilterUser = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { users } = this.state;

    const { value: selected, name } = event.target;
    this.setState({
      valueSelected: { ...this.state.valueSelected, [name]: selected },
    });

    const usersFilter = users.filter((item: IUser) =>
      item.projects?.some((value) => value.role === event.target.value)
    );

    this.setState({ selectedFilter: usersFilter });
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
                onChange={this.handleFilterUser}
                name="role"
              />
              <DropdownMenu
                options={OPTIONS_PROJECT}
                size="medium"
                onChange={this.handleFilterUser}
                name="project"
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
            <UserList
              userList={isOpened ? updateUsers : users}
              onDelete={this.handleDeleteUser}
              message={updateUsers.length === 0 && isOpened ? NOTICE_MESSAGE : ''}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
