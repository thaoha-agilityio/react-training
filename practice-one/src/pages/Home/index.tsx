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
  users: IUser[];
}

class Home extends React.Component<IProps, IState> {
  state = { users: [] };

  // Add a user in data
  handleAddUser = (): void => {
    const newUser = {
      id: createID(),
      name: random(userNames),
      email: random(emails),
      avatar: random(avatars),
    } as IUser;

    users.push(newUser);
    this.setState({ users });
  };

  render(): React.ReactNode {
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
              <TextField type="text" placeholder="Search name..." />
              <Button variant="primary" size="medium" onClick={this.handleAddUser}>
                Add User
              </Button>
            </div>
            <UserList list={users} />
          </div>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Home;
