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
  background-color: ${colors.gray[30]};
`;

const ModalTitleStyled = styled(P.Large)`
  color: ${colors.dark[100]};
`;

const ModalBodyStyled = styled.div`
  padding: 39px 41px 31px;
  min-height: calc(100vh - 122px);
  background-color: white;
`;

const ModalImageStyled = styled.div`
  text-align: center;
  margin-bottom: ${metrics.margins.xxl};
`;

const DescriptionTextStyled = styled(P.Tiny)`
  color: ${colors.gray[150]};
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
  color: ${colors.dark[50]};
`;

const BackgroundTextStyled = styled.div`
  background: ${colors.blue[20]};
  border-radius: ${metrics.borderRadius.lg}px;
  padding: 5px 15px;
`;

const TextInfoStyled = styled(P.Normal)`
  color: ${colors.blue[250]};
`;

const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: end;
  gap: 39px;
  height: 58px;
  padding: 12px 19px;
  background-color: ${colors.gray[30]};
`;

const WrapperButtonStyled = styled.div`
  ${AlignBaseLineStyle};
  gap: 9px;
`;

const EscapeTextStyled = styled.p`
  font-family: ${fonts.fontFamilies.secondary};
  font-weight: ${fonts.fontWeights.medium};
  font-size: ${fonts.fontSizes.xs}px;
  color: ${colors.gray[150]};
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
