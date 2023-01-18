import styled from "styled-components";
import { colors, fonts } from "../themes";

const NormalText = styled.p`
  font: 400 14px/18px "Rubik";
  color: ${colors.dark[50]};
`;

const BoldText = styled(NormalText)`
  font-weight: ${fonts.fontWeights.semiBold};
`;

const MediumText = styled(BoldText)`
  font-size: ${fonts.fontSizes.lg}px;
  line-height: ${fonts.lineHeights.tiny};
`;

const SmallText = styled(NormalText)`
  font-size: ${fonts.fontSizes.sm}px;
  line-height: ${fonts.lineHeights.sm};
  color: ${colors.gray[300]};
`;

interface ParagraphStyle {
  Normal: typeof NormalText;
  Bold: typeof BoldText;
  Medium: typeof MediumText;
  Small: typeof SmallText;
}

export const P: ParagraphStyle = {
  Normal: NormalText,
  Bold: BoldText,
  Medium: MediumText,
  Small: SmallText,
};

export { MediumText, NormalText, BoldText, SmallText };
