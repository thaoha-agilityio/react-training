import { memo, ReactNode } from "react";

import { CircleButton, IconButton } from "./index.styled";

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
      <CircleButton width={width} height={height} {...rest}>
        {icon}
      </CircleButton>
    ) : (
      <IconButton width={width} height={height} {...rest}>
        {icon}
      </IconButton>
    )}
  </>
);

export default memo(Button);
