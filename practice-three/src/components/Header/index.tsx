import { memo } from "react";

import Input from "../Input";
import Button from "../Button";
import { LightIcon, SearchIcon } from "../Icon";

import bookshelf from "../assets/images/bookshelf.png";
import logo from "../assets/images/logo.png";

import { HeaderStyled, LogoStyled, ActionWrapperStyled } from "./index.styled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <img src={logo} alt="logo" />
        <img src={bookshelf} alt="logo" />
      </LogoStyled>
      <ActionWrapperStyled>
        <Input
          borderRadius={30}
          pLeft={50}
          children={<SearchIcon />}
          placeholder="Search books"
        />
        <Button isCircle={false} bgColor={"transparent"} icon={<LightIcon />} />
      </ActionWrapperStyled>
    </HeaderStyled>
  );
};
export default memo(Header);
