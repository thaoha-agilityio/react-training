import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Themes
import { theme } from './themes';

const queryClient = new QueryClient({});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <h1>Hello world</h1>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
