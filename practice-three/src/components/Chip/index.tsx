import { ReactNode } from "react";
import Button from "../Button";

import { ChipStyled, LabelStyled } from "./index.styled";

type ChipProps = {
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
  onClick: () => void;
}

const Chip = ({
  label,
  startAdornments,
  endAdornments,
  width,
  height,
  fontSize,
  fontWeight,
  bgColor,
  onClick,
  ...rest
}: ChipProps): React.ReactElement => {
  return (
    <ChipStyled
      width={width}
      height={height}
      onClick={onClick}
      bgColor={bgColor}
      {...rest}
    >
      {startAdornments && (
        <Button isCircle={false} icon={startAdornments} bgColor="transparent" />
      )}
      <LabelStyled fontSize={fontSize} fontWeight={fontWeight}>
        {label}
      </LabelStyled>
      {endAdornments && (
        <Button isCircle={false} icon={endAdornments} bgColor="transparent" />
      )}
    </ChipStyled>
  );
};

export default Chip;
