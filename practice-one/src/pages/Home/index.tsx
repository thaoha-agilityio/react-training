import React from 'react';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import SearchFilter from '../../components/SearchFilter';
import DropdownMenu from '../../components/DropdownMenu';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import UserList from '../../components/Table/UserList';

import { OPTIONS_ROLE, OPTIONS_PROJECT } from '../../constants/dropdown';
import { avatars, userNames, users, emails } from '../../mocks/info';
import { IUser } from '../../types/IUser';
import { createID } from '../../helpers/createId';

// CSS
import './index.css';
import { random } from '../../helpers/random';

interface IProps {
  children?: React.ReactNode;
}

interface IState {
  userList: IUser[];
  value: string;
  usersUpdate: IUser[];
}

class Home extends React.Component<IProps, IState> {
  state = { userList: users, value: '', usersUpdate: [] };

  // Add a user in data
  handleAddUser = (): void => {
    const newUser = {
      id: createID(),
      name: random(userNames),
      email: random(emails),
      avatar: random(avatars),
    } as IUser;

    users.push(newUser);
    this.setState({ userList: users });
  };

  // Delete by Id
  handleDeleteUser = (id: string): void => {
    const currentUserList = this.state.userList.filter((item) => item.id !== id);

    this.setState({ usersUpdate: currentUserList });
  };

  // Search by name
  handleSearchUser = (): void => {
    const { userList } = this.state;
    const dataSearch = userList.filter(
      (item: IUser) => item.name.toLowerCase().search(this.state.value.toLowerCase()) >= 0
    );

    this.setState({ userList: dataSearch });

    // Clear text
    this.setState({ value: '' });
  };

  // Get value input
  handleChangeText = (event: React.FormEvent<HTMLInputElement>): string => {
    this.setState({ value: event.currentTarget.value });

    return this.state.value;
  };

  render(): React.ReactNode {
    const { value, usersUpdate, userList } = this.state;
    const usersUpdateLength = usersUpdate.length;

    return (
      <div className="container">
        <Header />
        <Content>
          <SearchFilter>
            <DropdownMenu options={OPTIONS_ROLE} />
            <DropdownMenu options={OPTIONS_PROJECT} />
          </SearchFilter>
          <div className="main-content">
            <div className="page-wrapper">
              <TextField
                type="text"
                placeholder="Search name..."
                onChange={this.handleChangeText}
                onClick={this.handleSearchUser}
                value={value}
              />
              <Button variant="primary" size="medium" onClick={this.handleAddUser}>
                Add User
              </Button>
            </div>
            <UserList
              userList={usersUpdateLength > 0 ? usersUpdate : userList}
              onDelete={this.handleDeleteUser}
            />
          </div>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Home;
