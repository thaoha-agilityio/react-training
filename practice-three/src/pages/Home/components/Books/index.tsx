import { memo, useContext } from "react";

// Component
import CardItem from "@/components/CardItem";

import { BooksContext } from "@/contexts/BooksContext";

// Styled
import { BooksStyled } from "./index.styled";
import { NOTICE_MESSAGE } from "@/constants/message";
import { P } from "@/styled-common";

const Books = (): React.ReactElement => {
  const { books } = useContext(BooksContext);

  return (
    <BooksStyled>
      {books.map((item) => (
        <div key={item.id}>{<CardItem item={item} />}</div>
      ))}

      {/* Show message when array empty */}
      {books.length === 0 && <P.Normal>{NOTICE_MESSAGE}</P.Normal>}
    </BooksStyled>
  );
};

export default memo(Books);
