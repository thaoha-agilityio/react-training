import { memo } from 'react';

// Hook
import { useBooks } from '../../../../hooks/useBooks';

// Component
import CardItem from '../../../../components/CardItem';
import { Spinner } from '../../../../components/Spinner';

import { ERROR_MESSAGE, NOTICE_MESSAGE } from '../../../../constants/message';

// Styled
import { BooksStyled } from './index.styled';
import { P } from '../../../../styled-common';

export type BooksProps = {
  isGridView: boolean;
  onSetSelectedBookId: (id: string) => void;
};

const Books = ({ isGridView, onSetSelectedBookId }: BooksProps): React.ReactElement => {
  const { books, error, isLoading } = useBooks();

  return isLoading ? (
    <Spinner />
  ) : (
    <BooksStyled isGridView={isGridView} data-testById="books">
      {books.length ? (
        books.map((item) => (
          <div key={item.id}>
            <CardItem
              isGridView={isGridView}
              item={item}
              onSetSelectedBookId={onSetSelectedBookId}
            />
          </div>
        ))
      ) : (
        <P.Normal>{NOTICE_MESSAGE}</P.Normal>
      )}

      {/* Render error if it have*/}
      {error && <P.Error>{ERROR_MESSAGE}</P.Error>}
    </BooksStyled>
  );
};

export default memo(Books);
