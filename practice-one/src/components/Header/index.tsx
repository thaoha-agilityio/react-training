import React from 'react';
import logo from '../../assets/images/logo.png';
import notification from '../../assets/images/notificationIcon.jpg';
import dark from '../../assets/images/darkIcon.jpg';
import './index.css';

class Header extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <header>
        <ul className="nav">
          <li>
            <img src={notification} alt="icon" />
          </li>
          <li>
            <img src={dark} alt="icon" />
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
