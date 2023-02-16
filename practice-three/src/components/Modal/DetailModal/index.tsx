import { memo, useEffect } from "react";

import Avatar from "../../Avatar";
import Button from "../../Button";
import ToggleButton from "../../ToggleButton";
import LabelButton from "../../../pages/Home/components/LabelButton";
import { DarkIcon, LightIcon, XmarkIcon } from "../../Icon";

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

type DetailModalProps = {
  book: IBook;
  isDarkTheme: boolean;
  onCloseModal: () => void;
  onToggleTheme: () => void;
  onCloseByKeyboard: (event: KeyboardEvent) => void;
};

const DetailModal = ({
  book: { name, avatar, author, description, published, publishers },
  onCloseModal,
  onCloseByKeyboard,
  onToggleTheme,
  isDarkTheme,
}: DetailModalProps): React.ReactElement => {
  // Close modal by keyboard
  useEffect(() => {
    window.addEventListener("keydown", onCloseByKeyboard);

    // Remove event before closing modal
    return () => window.removeEventListener("keydown", onCloseByKeyboard);
  }, []);

  return (
    <Backdrop>
      <DetailModalStyled>
        <ModalHeaderStyled>
          <ModalTitleStyled>{name}</ModalTitleStyled>
          <Button
            isCircle={false}
            bgColor="transparent"
            icon={<XmarkIcon />}
            onClick={onCloseModal}
            data-testid="close-button"
          />
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
            <LabelButton text="esc" onClick={onCloseModal} />
            <EscapeTextStyled>to escape</EscapeTextStyled>
          </WrapperButtonStyled>
          <ToggleButton
            width={77}
            height={34}
            textAlign={isDarkTheme ? "right" : "left"}
            borderRadius={30}
            icon={isDarkTheme ? <DarkIcon /> : <LightIcon />}
            onClick={onToggleTheme}
            data-testid="toggle-button"
          />
        </ModalFooterStyled>
      </DetailModalStyled>
    </Backdrop>
  );
};

export default memo(DetailModal);
