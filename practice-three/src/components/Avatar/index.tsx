import { AvatarStyled } from './index.styled';

import { THUMBNAIL } from '../../constants/mockData';

type AvatarProps = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  borderRadius: number;
};

const Avatar = ({
  width = 201,
  height = 202,
  alt,
  url = THUMBNAIL,
  borderRadius,
}: AvatarProps): React.ReactElement => (
  <AvatarStyled src={url} alt={alt} borderRadius={borderRadius} width={width} height={height} />
);

export default Avatar;
