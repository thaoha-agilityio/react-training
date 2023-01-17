import Avatar from "../Avatar";
import { Heading } from "../../styled-common/paragraph";
import { IBook } from "@/types/book";
import {
  CardItemStyled,
  CardImgWrapperStyled,
  CardContentStyled,
  CardInfoStyled,
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
        <Heading> {item.name}</Heading>
        <CardInfoStyled>{item.author}</CardInfoStyled>
        <CardInfoStyled>{item.published}</CardInfoStyled>
      </CardContentStyled>
    </CardItemStyled>
  );
};

export default CardItem;
