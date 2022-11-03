import React from 'react';
import './index.css';

interface IProps {
  username: string;
  url?: string;
  styles?: 'circle' | 'square';
  size?: 'small' | 'medium' | 'large';
  alt: string;
}

const Avatar = ({ username, url, styles, size, alt }: IProps): React.ReactElement => {
  return (
    <div className="info">
      <img className={`avatar avatar-${styles} avatar-${size}`} src={url} alt={alt} />
      {username}
    </div>
  );
};

export default Avatar;
