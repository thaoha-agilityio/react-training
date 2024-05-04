import { ChakraProvider } from '@chakra-ui/react';

// Themes
import { theme } from './themes';
import Footer from './components/Footer';

const App = () => (
  <ChakraProvider theme={theme}>
    <h1>Hello world</h1>
    <Footer />
  </ChakraProvider>
);

export default App;
