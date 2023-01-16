import styled from "styled-components";

interface StyledAvatarProps {
  width: number;
  height: number;
  borderRadius: number;
}

const AvatarStyled = styled.img<StyledAvatarProps>`
  ${(props) => props.width && `width:${props.width}px`};
  ${(props) => props.height && `height:${props.height}px`};
  ${(props) => props.borderRadius && ` border-radius:${props.borderRadius}px`};
`;

export { AvatarStyled };
