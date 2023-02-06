import styled from "styled-components";

// Themes
import { P } from "../../../../styled-common";
import { metrics } from "../../../../themes";

const CategoriesStyled = styled.div`
  box-shadow: ${metrics.shadows.xxl};
  background-color: ${({ theme }) => theme.mainHeading};
  width: 268px;
  margin-top: 1px;
`;

const ParaphraseStyled = styled(P.Normal)`
  width: 245px;
  line-height: 1.56;
  padding: 20px 30px 0px;
  color: ${({ theme }) => theme.textColor};
`;

export { CategoriesStyled, ParaphraseStyled };
