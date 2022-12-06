import bookshelf from '@/assets/images/bookshelf.png';
import logo from '@/assets/images/logo.png';

import { ReactComponent as Icon } from '@/assets/images/icons/light.svg';
import Button from '@/components/Button';

import './index.css';

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="logo" />
        <img src={bookshelf} alt="logo" />
      </div>
      <div className="dark-light">
        <Button variant="outlined" size="medium" icon={<Icon />} />
      </div>
    </header>
  );
};

export default Header;
