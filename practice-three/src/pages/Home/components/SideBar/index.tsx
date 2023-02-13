import { memo } from "react";
import { useCategories } from "../../../../hooks";

// Component
import Category from "../../../../components/Category";

// Type
import { ICategory } from "../../../../types/category";

// Styled
import { CategoriesStyled, ParaphraseStyled } from "./index.styled";

type SidebarCategoriesProps = {
  categories: ICategory[];
};

const SideBar = (): React.ReactElement => {
  const { categories } = useCategories();

  return (
    <CategoriesStyled data-testid="Sidebar">
      <>
        <ParaphraseStyled>
          A curated list of every book ever written
        </ParaphraseStyled>
        {categories?.map((category: ICategory) => (
          <div key={category.id}>
            <Category category={category} />
          </div>
        ))}
      </>
    </CategoriesStyled>
  );
};

export default memo(SideBar);
