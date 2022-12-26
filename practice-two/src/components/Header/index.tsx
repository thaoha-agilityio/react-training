import { ChangeEvent, memo, useContext } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext ';

import Button from '@/components/Button';
import Input from '../Input';
import { LightIcon, MoonIcon, SearchIcon } from '../Icon';

import bookshelf from '@/assets/images/bookshelf.png';
import logo from '@/assets/images/logo.png';

import './index.css';

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ onChange }: IProps): React.ReactElement => {
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
              <Button variant="primary" icon={<SearchIcon />} styles="normal" size="small" />
            }
            placeholder="Search books"
            onChange={onChange}
          />
        </div>
        <div className="dark-light">
          <Button
            variant="primary"
            size="medium"
            icon={isDarkMode ? <MoonIcon /> : <LightIcon />}
            onClick={toggleTheme}
            styles="normal"
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
