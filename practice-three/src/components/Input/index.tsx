import { ComponentPropsWithRef, ReactNode } from "react";

import {
  InputGroupStyled,
  InputStartAdornmentStyled,
  InputStyled,
} from "./index.styled";

interface IProps extends Omit<ComponentPropsWithRef<"input">, "size"> {
  width?: number;
  height?: number;
  borderRadius: number;
  pLeft: number;
  children?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  width = 670,
  height = 53,
  borderRadius,
  pLeft,
  children,
  onChange,
  ...rest
}: IProps) => {
  return (
    <InputGroupStyled>
      <InputStartAdornmentStyled children={children} />
      <InputStyled
        width={width}
        height={height}
        onChange={onChange}
        borderRadius={borderRadius}
        pLeft={pLeft}
        {...rest}
      />
    </InputGroupStyled>
  );
};

export default Input;
