import { THUMBNAIL } from '@/constants/message';

import './index.css';

interface IProps {
  url: string;
  alt: string;
  styles?: 'circle' | 'square';
  size?: 'small' | 'medium' | 'large';
}

const Avatar = ({ url = THUMBNAIL, styles = 'square', size, alt }: IProps): React.ReactElement => (
  <div className="avatar">
    <img className={`avatar avatar-${styles} avatar-${size}`} src={url} alt={alt} />
  </div>
);

export default Avatar;
