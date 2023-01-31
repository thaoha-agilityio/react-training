import styled from "styled-components";

interface StyledButtonProps {
  bgColor: string;
  borderColor?: string;
  width?: number;
  height?: number;
}

export const IconButtonStyled = styled.button<StyledButtonProps>`
  ${(props) => props.width && `width:${props.width}px`};
  ${(props) => props.height && `height:${props.height}px`};
  ${(props) => `background-color:${props.bgColor}`};
  border: none;
  cursor: pointer;
`;

export const CircleButtonStyled = styled(IconButtonStyled)`
  border-radius: 50%;
  border: 1px solid;
  ${(props) => props.borderColor && `border-color:${props.borderColor}`};
`;
