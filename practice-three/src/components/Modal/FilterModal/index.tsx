import { memo } from "react";

// Components
import Button from "../../Button";
import Chip from "../../Chip";
import { GridIcon, ListIcon, ArrowIcon } from "../../Icon";

// Custom hooks
import { useBooks } from "../../../hooks/useBooks";

// Theme
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

type FilterModalProps = {
  width: number;
  height: number;
  top: number;
  right: number;
  onToggleFilterModal: () => void;
};

const FilterModal = ({
  width,
  height,
  top,
  right,
  onToggleFilterModal,
}: FilterModalProps): React.ReactElement => {
  const {
    isGridView,
    isSortNameStatus,
    isSortYearStatus,
    handleChangeGridView,
    handleSortByAlphabet,
    handleSortByReleaseYear,
  } = useBooks();

  return (
    <BackDropStyled onClick={onToggleFilterModal} >
      <FilterModalStyled width={width} height={height} right={right} top={top} data-testid="filter-modal">
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
              data-testid="grid-button"
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
              data-testid="list-button"
            />
            <OptionalTextStyled>list</OptionalTextStyled>
          </MenuOptionGroup>
        </MenuListStyled>

        <SortOptionStyled>
          <MenuOptionStyled>sort by</MenuOptionStyled>
          <Chip
            label="alphabetical order"
            color={isSortNameStatus ? colors.azureRadiance : colors.black}
            bgColor={isSortNameStatus ? colors.linkWater : colors.transparent}
            width={225}
            height={46}
            fontSize={13}
            fontWeight={400}
            flexLayout
            endAdornments={<ArrowIcon />}
            pRight={15}
            pLeft={15}
            borderRadius={10}
            onClick={handleSortByAlphabet}
          />
          <Chip
            label="release year"
            color={isSortYearStatus ? colors.azureRadiance : colors.black}
            bgColor={isSortYearStatus ? colors.linkWater : colors.transparent}
            width={225}
            height={46}
            fontSize={13}
            fontWeight={400}
            flexLayout
            endAdornments={<ArrowIcon />}
            pRight={15}
            pLeft={15}
            borderRadius={10}
            onClick={handleSortByReleaseYear}
          />
        </SortOptionStyled>
      </FilterModalStyled>
    </BackDropStyled>
  );
};

export default memo(FilterModal);
