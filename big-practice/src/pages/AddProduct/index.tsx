import { Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

// Constants
import { ADD_PRODUCT_CRUMBS, ROUTES, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useCustomToast, useMutationPostProduct } from '@hooks';

// Types
import { IProduct, STATUSES } from '@types';

// Components
import Banner from '@components/Banner';
import Form from '@components/Form';

const AddProduct = (): JSX.Element => {
  const navigate = useNavigate();
  const { showToast } = useCustomToast();

  // Get the mutate from useMutationPostProduct hook
  const { mutate, isLoading } = useMutationPostProduct();

  // Handle the submission of the product form
  const handleAddProduct = useCallback(
    (value: IProduct) => {
      const { id, name, image, price } = value;

      return mutate(
        {
          ...value,
          id,
          name,
          image,
          price,
        },
        {
          onError: (error) => {
            showToast(STATUSES.ERROR, error.message);
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
        <Form isLoading={isLoading} title='Add Product' onSubmitProduct={handleAddProduct} />
      </Container>
    </>
  );
};

export default AddProduct;
