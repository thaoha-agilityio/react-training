import styled from "styled-components";

const NormalText = styled.p`
  font: 400 14px/18px "Rubik";
`;

const BoldText = styled(NormalText)`
  font-weight: 500;
`;

const Heading = styled(BoldText)`
  font-size: 18px;
  line-height: 21px;
`;

const SubHeading = styled(NormalText)`
  font-size: 13px;
  line-height: 18px;
`;

export { Heading, NormalText, BoldText, SubHeading };
