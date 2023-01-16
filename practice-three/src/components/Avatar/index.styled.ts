import styled from "styled-components";

interface StyledAvatarProps {
  width: number;
  height: number;
  borderRadius: number;
}

const AvatarStyled = styled.img<StyledAvatarProps>`
  ${(props) => `width:${props.width}px`};
  ${(props) => `height:${props.height}px`};
  ${(props) => `border-radius:${props.borderRadius}px`};
`;

export { AvatarStyled };
