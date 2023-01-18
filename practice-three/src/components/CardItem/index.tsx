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
  onShowModal: (id: string) => void;
}

const CardItem = ({ item, onShowModal }: IProps): React.ReactElement => {
  return (
    <CardItemStyled data-testid="card-item">
      <CardImgWrapperStyled>
        <Avatar url={item.avatar} alt="avatar" borderRadius={5} />
      </CardImgWrapperStyled>
      <CardContentStyled>
        <CardTitleStyled>{item.name}</CardTitleStyled>
        <CardInfoStyled>{item.author}</CardInfoStyled>
        <CardInfoStyled>{item.published}</CardInfoStyled>
      </CardContentStyled>
    </CardItemStyled>
  );
};

export default CardItem;
