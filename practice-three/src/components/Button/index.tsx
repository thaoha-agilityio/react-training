import { memo, ReactNode } from "react";

import { CircleButton, BaseButton } from "./index.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCircle: boolean;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  text?: string;
  icon?: ReactNode;
}

const Button = ({
  variant,
  size,
  icon,
  text,
  isCircle,
  ...rest
}: IProps): React.ReactElement => (
  <>
    {isCircle ? (
      <CircleButton variant={variant} size={size} {...rest}>
        {icon}
      </CircleButton>
    ) : (
      <BaseButton variant={variant} size={size} {...rest}>
        {icon}
        {text}
      </BaseButton>
    )}
  </>
);

export default memo(Button);
