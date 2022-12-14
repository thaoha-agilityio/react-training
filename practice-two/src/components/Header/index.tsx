import { ChangeEvent, useContext } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext ';

import Button from '@/components/Button';
import Input from '../Input';
import { SvgLightComponent, SvgMoonComponent, SvgSearchComponent } from '../Icon';

import bookshelf from '@/assets/images/bookshelf.png';
import logo from '@/assets/images/logo.png';

import './index.css';

interface IProps {
  onchange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const Header = ({ onchange, onClick }: IProps): React.ReactElement => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="logo" />
        <img src={bookshelf} alt="logo" />
      </div>
      <div className="action-wrapper">
        <div className="search-box">
          <Input
            type="text"
            size="large"
            leftElement={
              <Button variant="primary" icon={<SvgSearchComponent />} onClick={onClick} />
            }
            placeholder="Search books"
            onChange={onchange}
          />
        </div>
        <div className="dark-light">
          <Button
            variant="primary"
            size="medium"
            icon={isDarkMode ? <SvgMoonComponent /> : <SvgLightComponent />}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
