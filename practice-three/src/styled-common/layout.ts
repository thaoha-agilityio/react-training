import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 1273px;
  margin: auto;
  box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.1);
`;

const AlignCenterStyle = css`
  display: flex;
  align-items: center;
`;

const AlignBaseLineStyle = css`
  display: flex;
  align-items: baseline;
`;

const ColumnCenterStyle = css`
  ${AlignCenterStyle};
  flex-direction: column;
`;

const ColumnBaselineStyle = css`
  ${ColumnCenterStyle};
  align-items: baseline;
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
  AlignBaseLineStyle,
  ColumnBaselineStyle,
};
