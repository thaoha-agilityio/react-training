import {
  CategoryWrapperStyled,
  CategoryStyled,
  ThumbnailStyled,
  ThumbnailTextStyled,
  CategoryNameStyled,
  TotalStyled,
} from "./index.styled";

const Category = () => {
  return (
    <CategoryWrapperStyled>
      <CategoryStyled>
        <ThumbnailStyled>
          <ThumbnailTextStyled>
            <CategoryNameStyled>TH</CategoryNameStyled>
          </ThumbnailTextStyled>
        </ThumbnailStyled>
      </CategoryStyled>
      <TotalStyled>123</TotalStyled>
    </CategoryWrapperStyled>
  );
};

export default Category;
