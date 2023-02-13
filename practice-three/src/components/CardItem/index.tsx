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
  item,
  onShowModal,
  onSetSelectedBookId,
  isGridView,
}: IProps): React.ReactElement => {
  const handleClick = useCallback((): void => {
    onSetSelectedBookId(item.id);
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
          url={item.avatar}
          alt="avatar"
          borderRadius={5}
          width={isGridView ? 201 : 353}
          height={isGridView ? 202 : 144}
        />
      </CardImgWrapperStyled>
      <CardContentStyled>
        <CardTitleStyled isGridView={isGridView}>{item.name}</CardTitleStyled>
        <CardInfoStyled isGridView={isGridView}>{item.author}</CardInfoStyled>
        <CardInfoStyled isGridView={isGridView}>
          {item.published}
        </CardInfoStyled>
      </CardContentStyled>
    </CardItemStyled>
  );
};

export default CardItem;
