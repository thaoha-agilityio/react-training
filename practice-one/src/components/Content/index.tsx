import React from 'react';
import './index.css';

interface IProps {
  children: React.ReactNode;
}

const Content = ({ children }: IProps): React.ReactElement => (
  <main>
    <div className="content">{children}</div>;
  </main>
);

export default Content;
