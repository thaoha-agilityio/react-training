import Button from '@/components/Button';
import Input from '../Input';
import { SvgLightComponent, SvgMoonComponent, SvgSearchComponent } from '../Icon';

import bookshelf from '@/assets/images/bookshelf.png';
import logo from '@/assets/images/logo.png';

import './index.css';
import { useContext } from 'react';
import { BooksContext } from '@/contexts/BooksContext';

const Header = (): React.ReactElement => {
  const { theme, toggleTheme } = useContext(BooksContext);

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
            leftElement={<Button variant="primary" icon={<SvgSearchComponent />} />}
            placeholder="Search books"
          />
        </div>
        <div className="dark-light">
          <Button
            variant="primary"
            size="medium"
            icon={theme === 'light-theme' ? <SvgLightComponent /> : <SvgMoonComponent />}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
