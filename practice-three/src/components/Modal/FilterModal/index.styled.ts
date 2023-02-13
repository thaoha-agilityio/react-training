import styled from "styled-components";

import { Backdrop, P } from "../../../styled-common";
import { colors, metrics } from "../../../themes";

interface StyledModalProps {
  width: number;
  height: number;
  top: number;
  right: number;
}

const BackDropStyled = styled(Backdrop)`
  background-color: transparent;
`;

const FilterModalStyled = styled.div<StyledModalProps>`
  ${(props) => `width:${props.width}px`};
  ${(props) => `height:${props.height}px`};
  ${(props) => `top:${props.top}px`};
  ${(props) => `right:${props.right}px`};
  position: absolute;
  box-shadow: ${metrics.shadows.lg};
  border-radius: ${metrics.borderRadius.tiny}px;
  padding: 29px 21px;
  background-color: ${colors.white};
  ::before {
    content: " ";
    width: 10px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 60px;
    transform: translate(50%, -50%) rotate(45deg);
  }
`;

const MenuOptionStyled = styled(P.Bold)`
  text-transform: capitalize;
  line-height: 2.3;
`;

const MenuListStyled = styled.div`
  display: flex;
  gap: 9px;
  margin-top: ${metrics.margins.xxs}px;
`;

const MenuOptionGroup = styled.div`
  text-align: center;
`;

const OptionalTextStyled = styled(P.Optional)`
  text-transform: capitalize;
`;

const SortOptionStyled = styled.div`
  margin-top: ${metrics.margins.lg}px;
`;

export {
  BackDropStyled,
  FilterModalStyled,
  MenuListStyled,
  SortOptionStyled,
  MenuOptionStyled,
  OptionalTextStyled,
  MenuOptionGroup,
};
