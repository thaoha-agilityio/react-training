import styled from "styled-components";

import {
  AlignBaseLineStyle,
  JustifyBetweenStyle,
  P,
} from "../../../styled-common";
import { colors, fonts, metrics } from "../../../themes";

const DetailModalStyled = styled.div`
  position: absolute;
  right: 0;
  width: ${metrics.widths.xxl}px;
  min-height: calc(100vh - 0px);
  box-shadow: ${metrics.shadows.lg};
  border-radius: ${metrics.borderRadius.tiny};
`;

const ModalHeaderStyled = styled.div`
  ${JustifyBetweenStyle};
  width: 485px;
  height: 68px;
  padding: 20px 29px;
  background-color: ${colors.linkWater};
`;

const ModalTitleStyled = styled(P.Large)`
  color: ${colors.black};
`;

const ModalBodyStyled = styled.div`
  padding: 39px 41px 31px;
  min-height: calc(100vh - 122px);
  background-color: ${({ theme }) => theme.mainHeading};
`;

const ModalImageStyled = styled.div`
  text-align: center;
  margin-bottom: ${metrics.margins.xxl}px;
`;

const DescriptionTextStyled = styled(P.Tiny)`
  color: ${({ theme }) => theme.infoBook};
  line-height: ${fonts.lineHeights.lg};
  margin-bottom: 9px;
  width: 413px;
`;

const BookInfoStyled = styled.div`
  ${AlignBaseLineStyle};
  gap: 10px;
  margin-top: 15px;
`;

const MainTextStyled = styled(P.Normal)`
  color: ${({ theme }) => theme.textColor};
`;

const BackgroundTextStyled = styled.div`
  background: ${colors.bostonBlue};
  border-radius: ${metrics.borderRadius.lg}px;
  padding: 5px 15px;
`;

const TextInfoStyled = styled(P.Normal)`
  color: ${colors.azureRadiance};
`;

const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: end;
  gap: 39px;
  height: 58px;
  padding: 12px 19px;
  background-color: ${colors.linkWater};
`;

const WrapperButtonStyled = styled.div`
  ${AlignBaseLineStyle};
  gap: 9px;
`;

const EscapeTextStyled = styled.p`
  font-family: ${fonts.fontFamilies.secondary};
  font-weight: ${fonts.fontWeights.medium};
  font-size: ${fonts.fontSizes.xs}px;
  color: ${colors.comet};
  line-height: 1.3;
  text-transform: capitalize;
`;

export {
  DetailModalStyled,
  ModalHeaderStyled,
  ModalTitleStyled,
  ModalBodyStyled,
  ModalImageStyled,
  DescriptionTextStyled,
  BookInfoStyled,
  MainTextStyled,
  BackgroundTextStyled,
  TextInfoStyled,
  ModalFooterStyled,
  WrapperButtonStyled,
  EscapeTextStyled,
};
