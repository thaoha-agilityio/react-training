import { ReactNode } from "react";

import { CircleButtonStyled, IconButtonStyled } from "./index.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCircle?: boolean;
  bgColor: string;
  borderColor?: string;
  height?: number;
  width?: number;
  icon: ReactNode;
}

const Button = ({
  width = 40,
  height = 40,
  icon,
  isCircle = false,
  bgColor,
  ...rest
}: IProps): React.ReactElement => (
  <>
    {isCircle ? (
      <CircleButtonStyled
        width={width}
        height={height}
        bgColor={bgColor}
        {...rest}
      >
        {icon}
      </CircleButtonStyled>
    ) : (
      <IconButtonStyled
        width={width}
        height={height}
        bgColor={bgColor}
        {...rest}
      >
        {icon}
      </IconButtonStyled>
    )}
  </>
);

export default Button;
