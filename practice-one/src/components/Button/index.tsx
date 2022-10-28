import React from 'react';
import './index.css';

interface IProps extends React.ComponentPropsWithoutRef<'button'> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

class Button extends React.Component<IProps> {
  render(): React.ReactNode {
    return <button className="add-btn" {...this.props} />;
  }
}

export default Button;
