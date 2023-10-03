import { useCallback } from 'react';

// Layouts
import PageLayout from '@layouts/PageLayout';

// Constants
import { MENU, SUCCESS_MESSAGES } from '@constants';

// Hooks
import { useMutationPostProduct } from '@hooks';

// Stores
import { useMessageStores } from '@stores';

// Types
import { IProduct } from '@types';

// Components
import { Banner } from '@components/Banner';
import Form from '@components/Form';

const AddProduct = () => {
  const { mutate } = useMutationPostProduct();

  const { setErrorMessage, setSuccessMessage, successMessage, errorMessage } = useMessageStores();

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
          },
          onSuccess: () => {
            setSuccessMessage(SUCCESS_MESSAGES.ADDED(value.name));
          },
        },
      );
    },
    [mutate, setErrorMessage, setSuccessMessage],
  );

  return (
    <>
      <Banner title={MENU[2].title} breadcrumbItems={MENU[2]} />
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
