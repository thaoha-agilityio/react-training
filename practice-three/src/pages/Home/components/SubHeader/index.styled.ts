import { AlignCenterStyle, JustifyBetweenStyle, P } from "@/styled-common";
import { fonts, metrics } from "@/themes";

import styled from "styled-components";

const SubheaderStyled = styled.aside`
  ${JustifyBetweenStyle}
  min-height: ${metrics.heights.sm};
  box-shadow: ${metrics.shadows.xl};
  padding: 18px 41px 18px 30px;
  background-color: var(--main-heading);
`;

const TitleStyled = styled(P.Medium)`
  font-weight: ${fonts.fontWeights.normal};
  color: #000;
`;

const ShowCategoriesStyled = styled.div`
  ${AlignCenterStyle};
  flex-wrap: wrap;
  width: 598px;
  gap: 20px;
`;

const TotalBooksStyled = styled(P.Bold)`
  color: #000;
`;

export { SubheaderStyled, TitleStyled, ShowCategoriesStyled, TotalBooksStyled };
