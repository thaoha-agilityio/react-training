import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

// Layouts
import Container from '@components/Container';

// Constants
import { ADD_PRODUCT_CRUMBS, MENU, ROUTES, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useCustomToast, useMutationPostProduct } from '@hooks';

// Stores
import { useMessageStores } from '@stores';

// Types
import { IProduct, STATUSES } from '@types';

// Components
import Banner from '@components/Banner';
import Form from '@components/Form';

const AddProduct = () => {
  const navigate = useNavigate();
  const { showToast } = useCustomToast();

  // Get the mutate from useMutationPostProduct hook
  const { mutate, isLoading } = useMutationPostProduct();

  // Get message to
  const { setErrorMessage } = useMessageStores();

  // Handle the submission of the product form
  const handleAddProduct = useCallback(
    (value: IProduct) => {
      const { id, name, image, category, price } = value;

      return mutate(
        {
          ...value,
          id,
          name,
          image,
          category,
          price,
        },
        {
          onError: (error) => {
            setErrorMessage(error.message);
          },
          onSuccess: (res) => {
            navigate(ROUTES.DETAIL_PRODUCT_PARAMS + res.id);
            showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.EDITED(res.name));
          },
        },
      );
    },
    [mutate],
  );

  return (
    <>
      <Banner title='Add Product' crumbs={ADD_PRODUCT_CRUMBS} />
      <Container>
        <Form isLoading={isLoading} title={MENU[2].title} onSubmitProduct={handleAddProduct} />
      </Container>
    </>
  );
};

export default AddProduct;
