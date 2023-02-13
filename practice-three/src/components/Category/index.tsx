import { memo } from "react";
import { useCategories } from "../../hooks";

import { ICategory } from "../../types/category";
import {
  CategoryWrapperStyled,
  CategoryStyled,
  ThumbnailStyled,
  ThumbnailTextStyled,
  CategoryNameStyled,
  TotalStyled,
} from "./index.styled";

interface IProps {
  category: ICategory;
  onSelectCategory: (id: string) => void;
}

const Category = ({
  category: { id, name, total, bgColor },
  onSelectCategory,
}: IProps): React.ReactElement => {
  const { selectedIds } = useCategories();

  const handleSelectCategory = (): void => {
    // Check if selected category then don't call function
    if (selectedIds.includes(id)) return;

    onSelectCategory(id);
  };

  return (
    <CategoryWrapperStyled
      data-testid="category"
      onClick={handleSelectCategory}
    >
      <CategoryStyled>
        <ThumbnailStyled bgColor={bgColor}>
          <ThumbnailTextStyled>{name?.substring(0, 2)}</ThumbnailTextStyled>
        </ThumbnailStyled>
        <CategoryNameStyled>{name}</CategoryNameStyled>
      </CategoryStyled>
      <TotalStyled>{total}</TotalStyled>
    </CategoryWrapperStyled>
  );
};

export default memo(Category);
