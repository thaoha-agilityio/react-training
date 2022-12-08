import Button from '@/components/Button';
import { SvgLightComponent } from '../Icon';

import bookshelf from '@/assets/images/bookshelf.png';
import logo from '@/assets/images/logo.png';

import './index.css';

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="logo" />
        <img src={bookshelf} alt="logo" />
      </div>
      <div className="dark-light">
        <Button variant="outlined" size="medium" icon={<SvgLightComponent />} />
      </div>
    </header>
  );
};

export default Header;
