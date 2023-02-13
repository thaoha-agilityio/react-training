import { memo } from "react";

import Chip from "../../../../components/Chip";
import { FilterIcon } from "../../../../components/Icon";

import { colors } from "../../../../themes";
import ArrowRight from "../../../../assets/images/icons/arrow-right.svg";

import {
  SubheaderStyled,
  TitleStyled,
  ShowCategoriesStyled,
  TotalBooksStyled,
} from "./index.styled";

type SubHeaderProps = {
  onToggleFilterModal: () => void;
};

const SubHeader = ({
  onToggleFilterModal,
}: SubHeaderProps): React.ReactElement => {
  return (
    <SubheaderStyled>
      <TitleStyled>Categories</TitleStyled>

      <ShowCategoriesStyled>
        <img src={ArrowRight} />
        <TotalBooksStyled>Showing 2 Result(s)</TotalBooksStyled>
      </ShowCategoriesStyled>

      <Chip
        label="Filter"
        color={colors.comet}
        bgColor={colors.linkWater}
        width={116}
        height={45}
        fontSize={14}
        fontWeight={400}
        flexLayout={false}
        startAdornments={<FilterIcon />}
        borderRadius={30}
        onClick={onToggleFilterModal}
      />
    </SubheaderStyled>
  );
};

export default memo(SubHeader);
