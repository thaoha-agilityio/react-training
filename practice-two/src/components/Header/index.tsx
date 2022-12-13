import Button from '@/components/Button';
import { SvgLightComponent, SvgSearchComponent } from '../Icon';

import bookshelf from '@/assets/images/bookshelf.png';
import logo from '@/assets/images/logo.png';

import './index.css';
import Input from '../Input';

const Header = (): React.ReactElement => {
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
          <Button variant="primary" size="medium" icon={<SvgLightComponent />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
