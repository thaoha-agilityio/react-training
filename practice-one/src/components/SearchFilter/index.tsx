import React from 'react';
import './index.css';

interface IProps {
  children?: React.ReactNode;
}

class SearchFilter extends React.Component<IProps> {
  render(): React.ReactNode {
    const { children } = this.props;
    return (
      <div className="dropDown">
        <h2>Search filter</h2>
        <div className="dropDown-menu">{children}</div>
      </div>
    );
  }
}

export default SearchFilter;
