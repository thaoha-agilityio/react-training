import { ComponentPropsWithRef, ReactNode } from "react";

import {
  InputGroupStyled,
  InputLeftElementStyled,
  InputStyled,
} from "./index.styled";

interface IProps extends Omit<ComponentPropsWithRef<"input">, "size"> {
  width: number;
  height: number;
  borderRadius: number;
  pLeft: number;
  children?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  width,
  height,
  borderRadius,
  type,
  pLeft,
  children,
  onChange,
  ...rest
}: IProps) => {
  return (
    <InputGroupStyled>
      <InputLeftElementStyled children={children} />
      <InputStyled
        type={type}
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
