import { memo } from "react";

// Hook
import { useBooks } from "@/hooks/useBooks";

// Component
import CardItem from "@/components/CardItem";

import { ERROR_MESSAGE, NOTICE_MESSAGE } from "@/constants/message";

// Styled
import { BooksStyled } from "./index.styled";
import { P } from "@/styled-common";

const Books = (): React.ReactElement => {
  const { books, error } = useBooks();
  return (
    <BooksStyled>
      {books.map((item) => (
        <div key={item.id}>{<CardItem item={item} />}</div>
      ))}

      {/* Show message when array empty */}
      {books.length === 0 && <P.Normal>{NOTICE_MESSAGE}</P.Normal>}

      {/* Render error if it have*/}
      {error && <P.Error>{ERROR_MESSAGE}</P.Error>}
    </BooksStyled>
  );
};

export default memo(Books);
