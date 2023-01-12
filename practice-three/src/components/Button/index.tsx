import { memo, ReactNode } from "react";

import { CircleButtonStyled, IconButtonStyled } from "./index.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCircle: boolean;
  height?: string;
  width?: string;
  icon: ReactNode;
}

const Button = ({
  width = "40px",
  height = "40px",
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
