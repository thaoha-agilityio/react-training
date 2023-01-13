import { ReactNode } from "react";

import { ToggleButtonStyled } from "./index.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: number;
  height: number;
  textAlign: string;
  borderRadius: number;
  bgColor?: string;
  icon: ReactNode;
}

const ToggleButton = ({
  width,
  height,
  textAlign,
  icon,
  borderRadius,
  bgColor,
  ...rest
}: IProps) => (
  <ToggleButtonStyled
    width={width}
    height={height}
    textAlign={textAlign}
    bgColor={bgColor}
    borderRadius={borderRadius}
    {...rest}
  >
    {icon}
  </ToggleButtonStyled>
);

export default ToggleButton;
