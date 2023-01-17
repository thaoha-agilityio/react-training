import { ReactNode } from "react";
import Button from "../Button";

import { ChipStyled, LabelStyled } from "./index.styled";

interface IProps {
  label: string;
  color: string;
  width: number;
  height: number;
  fontSize: number;
  fontWeight: number;
  flexLayout: boolean;
  bgColor?: string;
  pLeft?: number;
  pRight?: number;
  startAdornments?: ReactNode;
  endAdornments?: ReactNode;
  borderRadius?: number;
  onClick?: () => void;
}

const Chip = ({
  label,
  startAdornments,
  endAdornments,
  width,
  height,
  fontSize,
  fontWeight,
  onClick,
  ...rest
}: IProps) => {
  return (
    <ChipStyled width={width} height={height} onClick={onClick} {...rest}>
      {startAdornments && <Button isCircle={false} icon={startAdornments} />}
      <LabelStyled fontSize={fontSize} fontWeight={fontWeight}>
        {label}
      </LabelStyled>
      {endAdornments && <Button isCircle={false} icon={endAdornments} />}
    </ChipStyled>
  );
};

export default Chip;
