import React from 'react';
import './index.css';

interface IProps {
  username: string;
  url?: string;
  alt: string;
  styles?: 'circle' | 'square';
  size?: 'small' | 'medium' | 'large';
}

const Avatar = ({ username, url, styles, size, alt }: IProps): React.ReactElement => (
  <div className="info">
    <img className={`avatar avatar-${styles} avatar-${size}`} src={url} alt={alt} />
    {username}
  </div>
);

export default Avatar;
