import { Suspense, lazy } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

// Layouts
import MainLayout from '@layouts/MainLayout';

// Constants
import { ROUTES } from '@constants';

// components
import { Home } from '@pages/Home';

const Products = lazy(() => import('./pages/Products'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: ROUTES.SHOP,
        element: (
          <Suspense fallback={<Spinner />}>
            <Products />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
