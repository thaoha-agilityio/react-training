import { Outlet } from 'react-router-dom';

//  Components
import Footer from '@components/Footer';
import Header from '@components/Header';

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;
