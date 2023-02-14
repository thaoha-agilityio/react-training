import { ChangeEvent, memo } from "react";

// Component
import Input from "../Input";
import Button from "../Button";
import { DarkIcon, LightIcon, SearchIcon } from "../Icon";

// Images
import bookshelf from "../../assets/images/bookshelf.png";
import logo from "../../assets/images/logo.png";

import { HeaderStyled, LogoStyled, ActionWrapperStyled } from "./index.styled";

type HeaderProps = {
  isDarkTheme: boolean;
  onToggleTheme: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({
  isDarkTheme,
  onToggleTheme,
  onChange,
}: HeaderProps): React.ReactElement => {
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
          onChange={onChange}
        />
        <Button
          bgColor={"transparent"}
          icon={isDarkTheme ? <DarkIcon /> : <LightIcon />}
          onClick={onToggleTheme}
        />
      </ActionWrapperStyled>
    </HeaderStyled>
  );
};
export default memo(Header);
