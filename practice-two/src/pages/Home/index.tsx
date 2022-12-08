import Header from '@/components/Header';
import SubHeader from './SubHeader';

import './index.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Header />
        <SubHeader />
      </div>
    </div>
  );
};

export default Home;
