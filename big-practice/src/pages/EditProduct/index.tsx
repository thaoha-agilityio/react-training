import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Spinner, Container } from '@chakra-ui/react';

// Components
import Banner from '@components/Banner';
import Form from '@components/Form';

// Constants
import { DATA_CRUMBS, ROUTES, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useFetchProductDetail, useMutationEditProduct, useCustomToast } from '@hooks';

// Types
import { IProduct, STATUSES } from '@types';

const EditProduct = (): JSX.Element => {
  const navigate = useNavigate();
  const { uuid = '' } = useParams();
  const { showToast } = useCustomToast();

  // Get the data from useFetchProductDetail hook
  const { data: product, isFetching: isLoadingProduct } = useFetchProductDetail(uuid);

  // Get the mutate from useMutationEditProduct hook
  const { mutate, isLoading } = useMutationEditProduct();

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
            showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.EDITED(name));
          },
        },
      );
    },
    [mutate],
  );

  return (
    <>
      <Banner title='Edit Product' crumbs={DATA_CRUMBS} />
      <Container>
        <Box as='main' pt='30px'>
          {isLoadingProduct ? (
            <Box textAlign='center'>
              <Spinner variant='secondary' />
            </Box>
          ) : (
            <Form
              title='Edit Product'
              product={product}
              onSubmitProduct={handleAddProduct}
              isLoading={isLoading}
            />
          )}
        </Box>
      </Container>
    </>
  );
};

export default EditProduct;
