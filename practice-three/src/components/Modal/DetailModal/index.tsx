import { memo } from "react";

import Avatar from "../../Avatar";
import Button from "../../Button";
import ToggleButton from "../../ToggleButton";
import LabelButton from "../../../pages/Home/components/LabelButton";
import { LightIcon, XmarkIcon } from "../../Icon";

import { Backdrop } from "../../../styled-common";
import { IBook } from "../../../types/book";

import {
  DetailModalStyled,
  ModalHeaderStyled,
  ModalTitleStyled,
  ModalBodyStyled,
  ModalImageStyled,
  DescriptionTextStyled,
  BookInfoStyled,
  MainTextStyled,
  BackgroundTextStyled,
  TextInfoStyled,
  ModalFooterStyled,
  WrapperButtonStyled,
  EscapeTextStyled,
} from "./index.styled";

interface IProps {
  book: IBook;
}

const DetailModal = ({
  book: { name, avatar, author, description, published, publishers },
}: IProps): React.ReactElement => (
  <Backdrop>
    <DetailModalStyled>
      <ModalHeaderStyled>
        <ModalTitleStyled>{name}</ModalTitleStyled>
        <Button isCircle={false} bgColor="transparent" icon={<XmarkIcon />} />
      </ModalHeaderStyled>

      <ModalBodyStyled>
        <ModalImageStyled>
          <Avatar
            url={avatar}
            alt={name}
            borderRadius={5}
            width={201}
            height={263}
          />
        </ModalImageStyled>
        <DescriptionTextStyled>{description}</DescriptionTextStyled>

        <BookInfoStyled>
          <MainTextStyled>Author :</MainTextStyled>
          <BackgroundTextStyled>
            <TextInfoStyled>{author}</TextInfoStyled>
          </BackgroundTextStyled>
        </BookInfoStyled>

        <BookInfoStyled>
          <MainTextStyled>Published :</MainTextStyled>
          <BackgroundTextStyled>
            <TextInfoStyled>{published}</TextInfoStyled>
          </BackgroundTextStyled>
        </BookInfoStyled>

        <BookInfoStyled>
          <MainTextStyled>Publishers :</MainTextStyled>
          <BackgroundTextStyled>
            <TextInfoStyled>{publishers}</TextInfoStyled>
          </BackgroundTextStyled>
        </BookInfoStyled>
      </ModalBodyStyled>

      <ModalFooterStyled>
        <WrapperButtonStyled>
          <LabelButton text="esc" />
          <EscapeTextStyled>to escape</EscapeTextStyled>
        </WrapperButtonStyled>
        <ToggleButton
          width={77}
          height={34}
          textAlign="left"
          borderRadius={30}
          icon={<LightIcon />}
        />
      </ModalFooterStyled>
    </DetailModalStyled>
  </Backdrop>
);

export default memo(DetailModal);
