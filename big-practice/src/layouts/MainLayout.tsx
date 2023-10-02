import { ReactNode, memo } from 'react';

//  Components
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default memo(MainLayout);
