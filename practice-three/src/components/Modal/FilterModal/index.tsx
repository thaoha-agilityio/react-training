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

interface IProps {
  width: number;
  height: number;
  top: number;
  right: number;
}

const FilterModal = ({
  width,
  height,
  top,
  right,
}: IProps): React.ReactElement => {
  return (
    <BackDropStyled>
      <FilterModalStyled width={width} height={height} right={right} top={top}>
        <MenuOptionStyled>Display Options</MenuOptionStyled>
        <MenuListStyled>
          <MenuOptionGroup>
            <Button
              isCircle
              icon={<ListIcon />}
              bgColor="transparent"
              borderColor={colors.gray[20]}
            />
            <OptionalTextStyled>list</OptionalTextStyled>
          </MenuOptionGroup>
          <MenuOptionGroup>
            <Button
              isCircle
              icon={<GridIcon />}
              bgColor="transparent"
              borderColor={colors.gray[20]}
            />
            <OptionalTextStyled>grid</OptionalTextStyled>
          </MenuOptionGroup>
        </MenuListStyled>
        <SortOptionStyled>
          <MenuOptionStyled>sort by</MenuOptionStyled>
          <Chip
            label="alphabetical order"
            color={colors.dark[200]}
            width={225}
            height={46}
            fontSize={13}
            fontWeight={400}
            flexLayout
            endAdornments={<ArrowIcon />}
          />
          <Chip
            label="release year"
            color={colors.dark[200]}
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

export default FilterModal;
