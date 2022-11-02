import React from 'react';
import './index.css';

interface IProps {
  username: string;
  url?: string;
  styles?: 'circle' | 'square';
  size?: 'small' | 'medium' | 'large';
}

class Avatar extends React.Component<IProps> {
  render(): React.ReactNode {
    const { url, size, styles, username } = this.props;
    return (
      <div className="info">
        <img className={`avatar avatar-${styles} avatar-${size}`} src={url} />
        {username}
      </div>
    );
  }
}

export default Avatar;
