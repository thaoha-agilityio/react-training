import { memo } from "react";

import Button from "../../Button";
import Chip from "../../Chip";
import { GridIcon, ListIcon, ArrowIcon } from "../../Icon";

import { colors } from "../../../themes";

import {
  BackDropStyled,
  FilterModalStyled,
  MenuListStyled,
  SortOptionStyled,
  MenuOptionStyled,
  OptionalTextStyled,
  MenuOptionGroup,
} from "./index.styled";
import { useBooks } from "@/hooks/useBooks";

interface IProps {
  width: number;
  height: number;
  top: number;
  right: number;
  onToggleFilterModal: () => void;
}

const FilterModal = ({
  width,
  height,
  top,
  right,
  onToggleFilterModal,
}: IProps): React.ReactElement => {
  const { isGridView, handleChangeGridView } = useBooks();

  return (
    <BackDropStyled onClick={onToggleFilterModal}>
      <FilterModalStyled width={width} height={height} right={right} top={top}>
        <MenuOptionStyled>Display Options</MenuOptionStyled>
        <MenuListStyled>
          <MenuOptionGroup>
            <Button
              isCircle
              icon={<GridIcon />}
              bgColor={isGridView ? colors.linkWater : colors.transparent}
              borderColor={colors.athensGray}
              onClick={handleChangeGridView}
              disabled={isGridView}
            />
            <OptionalTextStyled>grid</OptionalTextStyled>
          </MenuOptionGroup>
          <MenuOptionGroup>
            <Button
              isCircle
              icon={<ListIcon />}
              bgColor={isGridView ? colors.transparent : colors.linkWater}
              borderColor={colors.athensGray}
              onClick={handleChangeGridView}
              disabled={!isGridView}
            />
            <OptionalTextStyled>list</OptionalTextStyled>
          </MenuOptionGroup>
        </MenuListStyled>
        <SortOptionStyled>
          <MenuOptionStyled>sort by</MenuOptionStyled>
          <Chip
            label="alphabetical order"
            color={colors.black}
            width={225}
            height={46}
            fontSize={13}
            fontWeight={400}
            flexLayout
            endAdornments={<ArrowIcon />}
          />
          <Chip
            label="release year"
            color={colors.black}
            width={225}
            height={46}
            fontSize={13}
            fontWeight={400}
            flexLayout
            endAdornments={<ArrowIcon />}
          />
        </SortOptionStyled>
      </FilterModalStyled>
    </BackDropStyled>
  );
};

export default memo(FilterModal);
