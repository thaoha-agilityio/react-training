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
}

const Category = ({
  category: { id, name, total, bgColor },
}: IProps): React.ReactElement => {
  return (
    <CategoryWrapperStyled data-testid="category">
      <CategoryStyled>
        <ThumbnailStyled bgColor={bgColor}>
          <ThumbnailTextStyled>{name.substring(0, 2)}</ThumbnailTextStyled>
        </ThumbnailStyled>
        <CategoryNameStyled>{name}</CategoryNameStyled>
      </CategoryStyled>
      <TotalStyled>{total}</TotalStyled>
    </CategoryWrapperStyled>
  );
};

export default Category;
