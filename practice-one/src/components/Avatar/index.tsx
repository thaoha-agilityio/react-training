import React from 'react';
import './index.css';

interface IProps {
  username: string;
  url?: string;
  styles?: 'circle' | 'square';
  size?: 'small' | 'medium' | 'large';
  alt: string;
}

class Avatar extends React.Component<IProps> {
  render(): React.ReactNode {
    const { url, size, styles, username, alt } = this.props;

    return (
      <div className="info">
        <img className={`avatar avatar-${styles} avatar-${size}`} src={url} alt={alt} />
        {username}
      </div>
    );
  }
}

export default Avatar;
