import { useCallback } from 'react';

// Layouts
import PageLayout from '@layouts/PageLayout';

// Constants
import { MENU, ROUTES, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useMutationPostProduct } from '@hooks';

// Stores
import { useMessageStores } from '@stores';

// Types
import { IMenuItem, IProduct } from '@types';

// Components
import Banner from '@components/Banner';
import Form from '@components/Form';

const AddProduct = () => {
  // Get the mutate from useMutationPostProduct hook
  const { mutate } = useMutationPostProduct();

  // Get message to
  const { setErrorMessage, setSuccessMessage, successMessage, errorMessage } = useMessageStores();

  // Handle the submission of the product form
  const handleAddProduct = useCallback(
    (value: IProduct) => {
      mutate(
        {
          name: value.name,
          category: value.category,
          description: value.description,
          price: value.price,
          image: value.image,
        },
        {
          onError: (error) => {
            setErrorMessage(error.message);
            console.log(error.message);
          },
          onSuccess: () => {
            setSuccessMessage(SUCCESS_MESSAGES.ADDED(value.name));
          },
        },
      );
    },
    [mutate, setErrorMessage, setSuccessMessage],
  );

  // Define breadcrumbs data for navigation
  const dataCrumbs: IMenuItem[] = [
    {
      title: 'Home',
      path: ROUTES.HOMEPAGE,
    },
    {
      title: 'Add Product',
      path: ROUTES.ADD_PRODUCT,
    },
  ];

  return (
    <>
      <Banner title='Add Product' crumbs={dataCrumbs} />
      <PageLayout>
        <Form
          title={MENU[2].title}
          onSubmitProduct={handleAddProduct}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
      </PageLayout>
    </>
  );
};

export default AddProduct;
