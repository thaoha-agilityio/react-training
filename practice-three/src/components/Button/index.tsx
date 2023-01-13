import { memo, ReactNode } from "react";

import { CircleButtonStyled, IconButtonStyled } from "./index.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCircle: boolean;
  height?: number;
  width?: number;
  icon: ReactNode;
}

const Button = ({
  width = 40,
  height = 40,
  icon,
  isCircle,

  ...rest
}: IProps): React.ReactElement => (
  <>
    {isCircle ? (
      <CircleButtonStyled width={width} height={height} {...rest}>
        {icon}
      </CircleButtonStyled>
    ) : (
      <IconButtonStyled width={width} height={height} {...rest}>
        {icon}
      </IconButtonStyled>
    )}
  </>
);

export default memo(Button);
