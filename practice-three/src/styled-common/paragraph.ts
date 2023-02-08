import styled from "styled-components";
import { colors, fonts } from "../themes";

const NormalText = styled.p`
  font: 400 14px/18px "Rubik";
  color: ${colors.bitter};
`;

const BoldText = styled(NormalText)`
  font-weight: ${fonts.fontWeights.medium};
`;

const LargeText = styled(BoldText)`
  font-size: ${fonts.fontSizes.xl}px;
  line-height: ${fonts.lineHeights.tiny};
`;

const MediumText = styled(BoldText)`
  font-size: ${fonts.fontSizes.lg}px;
  line-height: ${fonts.lineHeights.tiny};
`;

const SmallText = styled(NormalText)`
  font-size: ${fonts.fontSizes.sm}px;
  line-height: ${fonts.lineHeights.sm};
  color: ${colors.stormGray};
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
  color: ${colors.black};
  line-height: 2.3;
`;

const ErrorText = styled(NormalText)`
  color: red;
`;

interface ParagraphStyle {
  Normal: typeof NormalText;
  Bold: typeof BoldText;
  Large: typeof LargeText;
  Medium: typeof MediumText;
  Small: typeof SmallText;
  Tiny: typeof TinyText;
  Thumbnail: typeof ThumbnailText;
  CategoryName: typeof CategoryName;
  Optional: typeof OptionalText;
  Error: typeof ErrorText;
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
  Large: LargeText,
  Error: ErrorText,
};
