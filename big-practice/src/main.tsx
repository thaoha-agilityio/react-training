// Libraries
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Font family
import Fonts from '@components/fonts';

// Custom themes
import CHAKRA_THEME from '@themes/index.js';

// Components
import App from '@App';
import ErrorBoundary from '@components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Fonts />
    <ChakraProvider theme={CHAKRA_THEME}>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <App />
      </ErrorBoundary>
    </ChakraProvider>
  </QueryClientProvider>,
  // </React.StrictMode>,
);
