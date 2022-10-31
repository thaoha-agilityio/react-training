import React from 'react';
import './index.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  className?: string;
}

class Button extends React.Component<IProps> {
  static defaultProps: { className: string };
  render(): React.ReactNode {
    const { variant, size, className } = this.props;
    return <button {...this.props} className={`${className} btn btn-${variant} btn-${size}`} />;
  }
}

Button.defaultProps = {
  className: '',
};

export default Button;
