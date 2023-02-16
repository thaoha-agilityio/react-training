import { memo, useCallback } from "react";

import Avatar from "../Avatar";

import { IBook } from "../../types/book";

import {
  CardItemStyled,
  CardImgWrapperStyled,
  CardContentStyled,
  CardInfoStyled,
  CardTitleStyled,
} from "./index.styled";

type CardItemProps = {
  isGridView: boolean;
  item: IBook;
  onSetSelectedBookId: (id: string) => void;
}

const CardItem = ({
  item: { id, avatar, name, author, published },
  onSetSelectedBookId,
  isGridView,
}: CardItemProps): React.ReactElement => {
  const handleClick = useCallback((): void => {
    onSetSelectedBookId(id);
  }, []);

  return (
    <CardItemStyled
      data-testid="card-item"
      onClick={handleClick}
      isGridView={isGridView}
    >
      <CardImgWrapperStyled isGridView={isGridView}>
        <Avatar
          url={avatar}
          alt="avatar"
          borderRadius={5}
          width={isGridView ? 201 : 353}
          height={isGridView ? 202 : 144}
        />
      </CardImgWrapperStyled>
      <CardContentStyled>
        <CardTitleStyled isGridView={isGridView}>{name}</CardTitleStyled>
        <CardInfoStyled isGridView={isGridView}>{author}</CardInfoStyled>
        <CardInfoStyled isGridView={isGridView}>{published}</CardInfoStyled>
      </CardContentStyled>
    </CardItemStyled>
  );
};

export default memo(CardItem);
