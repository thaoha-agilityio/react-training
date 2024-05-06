import { ChakraProvider } from '@chakra-ui/react';

// Themes
import { theme } from './themes';

const App = () => (
  <ChakraProvider theme={theme}>
    <h1>Hello world</h1>
  </ChakraProvider>
);

export default App;
