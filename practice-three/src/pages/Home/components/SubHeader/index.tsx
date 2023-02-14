import { memo, useCallback } from "react";
import { useCategories } from "../../../../hooks";
import { useBooks } from "../../../../hooks/useBooks";
// Components
import Chip from "../../../../components/Chip";
import { FilterIcon, XmarkIcon } from "../../../../components/Icon";

// Themes
import { colors } from "../../../../themes";
import ArrowRight from "../../../../assets/images/icons/arrow-right.svg";

// Styled
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
  const { selectedIds, getCategoryById, removeSelectedCategory } =
    useCategories();

  const { handleFilterByCategories, books, searchBooks } = useBooks();

  const categories = getCategoryById(selectedIds);

  // Remove category in sub heading
  const handleRemoveCategories = useCallback(
    (id: string) => {
      removeSelectedCategory(id);

      const currentId = selectedIds.filter((categoryId) => categoryId !== id);

      // Check currentId is empty then render initial books
      if (!currentId.length) {
        searchBooks("");

        return;
      }

      handleFilterByCategories(currentId);
    },
    [selectedIds]
  );

  return (
    <SubheaderStyled>
      <TitleStyled>Categories</TitleStyled>

      <ShowCategoriesStyled>
        {categories?.map((category) => (
          <div key={category.id}>
            <Chip
              label={category.name}
              endAdornments={<XmarkIcon />}
              width={123}
              height={48}
              color={colors.azureRadiance}
              bgColor={colors.linkWater}
              pLeft={28}
              fontWeight={500}
              fontSize={14}
              onClick={() => handleRemoveCategories(category.id)}
              flexLayout={false}
              borderRadius={30}
            />
          </div>
        ))}
        <img src={ArrowRight} />
        <TotalBooksStyled>Showing {books.length} Result(s)</TotalBooksStyled>
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
