import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';

// Components
import Banner from '@components/Banner';
import Form from '@components/Form';
import Container from '@components/Container';

// Constants
import { DATA_CRUMBS, ROUTES, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useFetchProductDetail, useMutationEditProduct } from '@hooks';

// Stores
import { useMessageStores } from '@stores';

// Types
import { IProduct, STATUSES } from '@types';
import { useCustomToast } from '@hooks';

const EditProduct = (): JSX.Element => {
  const navigate = useNavigate();
  const { uuid = '' } = useParams();
  const { showToast } = useCustomToast();

  // Get the mutate from useMutationEditProduct hook
  const { mutate, isLoading } = useMutationEditProduct();

  // Get message to store
  const { setErrorMessage, setSuccessMessage, errorMessage, clearErrorMessage } =
    useMessageStores();

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
            clearErrorMessage();
            setSuccessMessage(SUCCESS_MESSAGES.EDITED(name));

            navigate(ROUTES.DETAIL_PRODUCT_PARAMS + res.id);
            showToast(STATUSES.SUCCESS, SUCCESS_MESSAGES.EDITED(name));
          },
        },
      );
    },
    [mutate, setErrorMessage, setSuccessMessage],
  );

  const { data: product, isFetching } = useFetchProductDetail(uuid);

  return (
    <>
      <Banner title='Edit Product' crumbs={DATA_CRUMBS} />
      <Container>
        <Box as='main' pt='30px'>
          {isFetching ? (
            <Box textAlign='center'>
              <Spinner variant='secondary' />
            </Box>
          ) : (
            <Form
              title='Edit Product'
              product={product}
              onSubmitProduct={handleAddProduct}
              errorMessage={errorMessage}
              isLoading={isLoading}
            />
          )}
        </Box>
      </Container>
    </>
  );
};

export default EditProduct;
