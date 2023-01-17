import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 1273px;
  margin: auto;
`;

const AlignCenterStyle = css`
  display: flex;
  align-items: center;
`;

const ColumnCenterStyle = css`
  ${AlignCenterStyle};
  flex-direction: column;
`;

const JustifyBetweenStyle = css`
  ${AlignCenterStyle};
  justify-content: space-between;
`;

const CenterAllStyle = css`
  ${AlignCenterStyle};
  justify-content: center;
`;

export {
  Container,
  CenterAllStyle,
  AlignCenterStyle,
  JustifyBetweenStyle,
  ColumnCenterStyle,
};
