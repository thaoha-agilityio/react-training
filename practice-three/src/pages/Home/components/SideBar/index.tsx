import { memo } from "react";

// Component
import Category from "../../../../components/Category";

// Type
import { ICategory } from "../../../../types/category";

// Styled
import { CategoriesStyled, ParaphraseStyled } from "./index.styled";

interface SidebarCategoriesProps {
  categories: ICategory[];
}

const SideBar = ({
  categories,
}: SidebarCategoriesProps): React.ReactElement => {
  return (
    <CategoriesStyled>
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
