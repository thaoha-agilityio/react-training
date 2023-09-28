// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import CHAKRA_THEME from '@themes/index.js';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

// Font family
import Fonts from '@fonts';

// Components
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Home } from '@pages/Homepage/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    ),
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Fonts />
    <ChakraProvider theme={CHAKRA_THEME}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
