import { memo, useCallback } from 'react';
import { useCategories } from '../../hooks';

// Type
import { ICategory } from '../../types/category';

// Styled
import {
  CategoryWrapperStyled,
  CategoryStyled,
  ThumbnailStyled,
  ThumbnailTextStyled,
  CategoryNameStyled,
  TotalStyled,
} from './index.styled';

export type CategoryProps = {
  category: ICategory;
  onSelectCategory: (id: string) => void;
};

const Category = ({
  category: { id, name, total, bgColor },
  onSelectCategory,
}: CategoryProps): React.ReactElement => {
  const { selectedIds } = useCategories();

  const handleSelectCategory = useCallback((): void => {
    // Check if selected category then don't call function
    if (selectedIds.includes(id)) return;

    onSelectCategory(id);
  }, [id, onSelectCategory, selectedIds]);

  return (
    <CategoryWrapperStyled
      data-testid="category"
      onClick={handleSelectCategory}
      isActive={!!selectedIds?.includes(id)}
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
