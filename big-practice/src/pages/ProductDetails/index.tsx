import { useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';

// Components
import CardDetails from '@components/CardDetails';

// Hooks
import { useFetchProductDetail } from '@hooks';

// Layouts
import PageLayout from '@layouts/PageLayout';

// Stores
import { useProductStore } from '@stores';

const ProductDetails = () => {
  const { uuid = '' } = useParams();

  const product = useProductStore((state) => state.product);

  const { isFetching } = useFetchProductDetail(uuid);

  return (
    <>
      <Box bg='yellow.150' w='full' h='100px'></Box>
      <PageLayout>
        {isFetching ? (
          <Box textAlign='center'>
            <Spinner variant='secondary' />
          </Box>
        ) : (
          <CardDetails card={product} />
        )}
      </PageLayout>
    </>
  );
};

export default ProductDetails;
