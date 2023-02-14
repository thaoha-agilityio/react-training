import { ReactNode } from "react";

import { ToggleButtonStyled } from "./index.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  width: number;
  height: number;
  textAlign: string;
  borderRadius: number;
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
