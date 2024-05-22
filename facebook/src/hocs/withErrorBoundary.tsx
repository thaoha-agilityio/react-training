import { Text } from '@chakra-ui/react';

// Components
import { ErrorBoundary } from '@/components';

export const withErrorBoundary = (Component: () => JSX.Element) => {
  const WithErrorBoundaryWrapper = () => (
    <ErrorBoundary fallback={<Text textAlign='center'>Something went wrong</Text>}>
      <Component />
    </ErrorBoundary>
  );

  return WithErrorBoundaryWrapper;
};

export default withErrorBoundary;
