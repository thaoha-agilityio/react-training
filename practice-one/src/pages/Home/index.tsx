import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import SearchFilter from '../../components/SearchFilter';
import DropdownMenu from '../../components/DropdownMenu';
import { OPTIONS_ROLE, OPTIONS_PROJECT } from '../../constants/dropdown';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <Header />
        <Content>
          <SearchFilter>
            <DropdownMenu options={OPTIONS_ROLE} />
            <DropdownMenu options={OPTIONS_PROJECT} />
          </SearchFilter>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Home;
