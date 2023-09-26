import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import CHAKRA_THEME from '@themes/index.js';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={CHAKRA_THEME}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
