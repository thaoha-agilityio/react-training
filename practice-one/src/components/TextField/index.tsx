import React from 'react';
import './index.css';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {}

class TextField extends React.Component<IProps> {
  render(): React.ReactNode {
    return <input className="text-field" {...this.props} />;
  }
}

export default TextField;
