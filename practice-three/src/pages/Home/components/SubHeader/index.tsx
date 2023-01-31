import { memo } from "react";

import Chip from "@/components/Chip";
import { FilterIcon, XmarkIcon } from "@/components/Icon";

import { colors } from "@/themes";
import ArrowRight from "../../../../assets/images/icons/arrow-right.svg";

import {
  SubheaderStyled,
  TitleStyled,
  ShowCategoriesStyled,
  TotalBooksStyled,
} from "./index.styled";

const SubHeader = () => {
  return (
    <SubheaderStyled>
      <TitleStyled>Categories</TitleStyled>

      <ShowCategoriesStyled>
        <Chip
          label={"Romance"}
          color={colors.blue[250]}
          bgColor={colors.blue[20]}
          width={123}
          height={40}
          fontSize={14}
          fontWeight={500}
          flexLayout={false}
          endAdornments={<XmarkIcon />}
          borderRadius={30}
          pLeft={16}
        />
        <img src={ArrowRight} />
        <TotalBooksStyled>Showing 2 Result(s)</TotalBooksStyled>
      </ShowCategoriesStyled>

      <Chip
        label="Filter"
        color={colors.gray[150]}
        bgColor={colors.gray[30]}
        width={116}
        height={45}
        fontSize={14}
        fontWeight={400}
        flexLayout={false}
        startAdornments={<FilterIcon />}
        borderRadius={30}
      />
    </SubheaderStyled>
  );
};

export default memo(SubHeader);
