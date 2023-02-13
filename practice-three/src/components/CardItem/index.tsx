import { useCallback } from "react";

import Avatar from "../Avatar";

import { IBook } from "@/types/book";

import {
  CardItemStyled,
  CardImgWrapperStyled,
  CardContentStyled,
  CardInfoStyled,
  CardTitleStyled,
} from "./index.styled";

interface IProps {
  item: IBook;
  onShowModal: () => void;
  onSetSelectedBookId: (id: string) => void;
  isGridView: boolean;
}

const CardItem = ({
  item: { id, avatar, name, author, published },
  onShowModal,
  onSetSelectedBookId,
  isGridView,
}: IProps): React.ReactElement => {
  const handleClick = useCallback((): void => {
    onSetSelectedBookId(id);
    onShowModal();
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

export default CardItem;
