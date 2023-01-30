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

const TinyText = styled(NormalText)`
  font-size: ${fonts.fontSizes.xs}px;
  line-height: ${fonts.lineHeights.md};
`;

const ThumbnailText = styled(NormalText)`
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${colors.white};
`;

const CategoryName = styled(NormalText)`
  font-size: ${fonts.fontSizes.sm}px;
  line-height: ${fonts.lineHeights.tiny};
`;

const OptionalText = styled(NormalText)`
  font-size: ${fonts.fontSizes.xxs}px;
  line-height: 2.3;
  color: ${colors.dark[200]};
`;

interface ParagraphStyle {
  Normal: typeof NormalText;
  Bold: typeof BoldText;
  Medium: typeof MediumText;
  Small: typeof SmallText;
  Tiny: typeof TinyText;
  Thumbnail: typeof ThumbnailText;
  CategoryName: typeof CategoryName;
  Optional: typeof OptionalText;
}

export const P: ParagraphStyle = {
  Normal: NormalText,
  Bold: BoldText,
  Medium: MediumText,
  Small: SmallText,
  Tiny: TinyText,
  Thumbnail: ThumbnailText,
  CategoryName: CategoryName,
  Optional: OptionalText,
};
