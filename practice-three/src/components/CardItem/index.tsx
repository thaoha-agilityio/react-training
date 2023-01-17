import { IBook } from "@/types/book";
import Avatar from "../Avatar";
import {
  CardItemStyled,
  CardInfoStyled,
  CardImgWrapperStyled,
  CardTitleStyled,
  CardContentStyled,
} from "./index.styled";

interface IProps {
  item: IBook;
  onShowModal: (id: string) => void;
}

const CardItem = ({ item }: IProps) => {
  return (
    <CardItemStyled data-testid="card-item">
      <CardImgWrapperStyled>
        <Avatar url={item.avatar} alt="avatar" borderRadius={5} />
      </CardImgWrapperStyled>
      <CardContentStyled>
        <CardTitleStyled> {item.name}</CardTitleStyled>
        <CardInfoStyled>{item.author}</CardInfoStyled>
        <CardInfoStyled>{item.published}</CardInfoStyled>
      </CardContentStyled>
    </CardItemStyled>
  );
};

export default CardItem;
