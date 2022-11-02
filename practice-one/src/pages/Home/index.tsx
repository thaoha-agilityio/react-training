import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import SearchFilter from '../../components/SearchFilter';
import DropdownMenu from '../../components/DropdownMenu';
import { OPTIONS_ROLE, OPTIONS_PROJECT } from '../../constants/dropdown';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import ListUser from '../../components/ListUsers';
import { avatars, userNames, listUser } from '../../mocks/info';
import { IUser } from '../../types/IUser';
import { random } from '../../helpers/random';

import './index.css';

class Home extends React.Component {
  state = { listUser };

  handleAddUser = () => {
    const newUser = {
      id: new Date().getTime().toString(),
      name: random(userNames),
      email: random(userNames),
      avatar: random(avatars),
    } as IUser;

    listUser.push(newUser);
    this.setState({ listUser: newUser });
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
            <ListUser list={listUser} />
          </div>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Home;
