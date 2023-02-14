import styled from "styled-components";

type BookProps = {
  isGridView: boolean;
};

export const BooksStyled = styled.div<BookProps>`
  display: ${(props) => (props.isGridView ? "flex" : "inline-block")};
  gap: 32px;
  flex-wrap: wrap;
  padding: 33px 38px;
  background: ${({ theme }) => theme.mainHeading};
  margin: 1px 1px;
  flex: 1;
  max-height: calc(100vh - 79px - 84px);
  overflow: auto;
`;
