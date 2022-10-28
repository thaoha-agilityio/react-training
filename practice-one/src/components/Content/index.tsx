import React from 'react';
import './index.css';

interface IProps {
  children?: React.ReactNode;
}

class Content extends React.Component<IProps> {
  render() {
    const { children } = this.props;
    return (
      <main>
        <div className="content">{children}</div>;
      </main>
    );
  }
}

export default Content;
