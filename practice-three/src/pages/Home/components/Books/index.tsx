import { memo, useContext } from "react";

// Component
import CardItem from "@/components/CardItem";

import { BooksContext } from "@/contexts/BooksContext";

// Styled
import { BooksStyled } from "./index.styled";

const Books = (): React.ReactElement => {
  const { books } = useContext(BooksContext);

  return (
    <BooksStyled>
      <>
        {books.map((item) => (
          <div key={item.id}>{<CardItem item={item} />}</div>
        ))}
      </>
    </BooksStyled>
  );
};

export default memo(Books);
