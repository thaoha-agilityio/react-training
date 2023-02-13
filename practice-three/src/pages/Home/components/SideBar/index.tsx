import { memo, useCallback } from "react";
import { useCategories } from "../../../../hooks";
import { useBooks } from "../../../../hooks/useBooks";

// Component
import Category from "../../../../components/Category";

// Type
import { ICategory } from "../../../../types/category";

// Styled
import { CategoriesStyled, ParaphraseStyled } from "./index.styled";

const SideBar = (): React.ReactElement => {
  const { categories, setSelectedCategory, selectedIds } = useCategories();
  const { handleFilterByCategories } = useBooks();

  // Set categoryId when click
  const handleSelectCategory = useCallback(
    (id: string) => {
      setSelectedCategory(id);

      // Show books after filter
      handleFilterByCategories([...selectedIds, id]);
    },
    [selectedIds]
  );

  return (
    <CategoriesStyled data-testid="Sidebar">
      <>
        <ParaphraseStyled>
          A curated list of every book ever written
        </ParaphraseStyled>
        {categories?.map((category: ICategory) => (
          <div key={category.id}>
            <Category
              category={category}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        ))}
      </>
    </CategoriesStyled>
  );
};

export default memo(SideBar);
