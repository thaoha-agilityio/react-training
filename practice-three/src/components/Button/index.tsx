import { memo, ReactNode } from "react";
import { StyledButton } from "./index.styled";
import "./index.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  styles: "normal" | "circle";
  text?: string;
  icon?: ReactNode;
}

const Button = ({
  variant,
  size,
  icon,
  text,
  styles,
}: IProps): React.ReactElement => (
  <StyledButton variant={variant} size={size} styles={styles}>
    {icon}
    {text}
  </StyledButton>
);

export default memo(Button);
