import { memo } from "react";

// Component
import Input from "../Input";
import Button from "../Button";
import { DarkIcon, LightIcon, SearchIcon } from "../Icon";

// Images
import bookshelf from "../../assets/images/bookshelf.png";
import logo from "../../assets/images/logo.png";

import { HeaderStyled, LogoStyled, ActionWrapperStyled } from "./index.styled";

type HeaderProps = {
  theme: boolean;
  themeToggle: () => void;
};

const Header = ({ theme, themeToggle }: HeaderProps): React.ReactElement => {
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
        <Button
          isCircle={false}
          bgColor={"transparent"}
          icon={theme ? <LightIcon /> : <DarkIcon />}
          onClick={themeToggle}
        />
      </ActionWrapperStyled>
    </HeaderStyled>
  );
};
export default memo(Header);
