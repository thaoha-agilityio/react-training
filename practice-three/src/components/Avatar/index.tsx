import { AvatarStyled } from "./index.styled";

import { THUMBNAIL } from "../../constants/books";

interface IProps {
  url: string;
  alt: string;
  width: number;
  height: number;
  borderRadius: number;
}

const Avatar = ({
  width,
  height,
  alt,
  url = THUMBNAIL,
  borderRadius,
}: IProps): React.ReactElement => (
  <AvatarStyled
    src={url}
    alt={alt}
    borderRadius={borderRadius}
    width={width}
    height={height}
  />
);

export default Avatar;
