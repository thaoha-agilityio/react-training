import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants';

// Pages
const Home = lazy(() => import('@pages/Home'));
const Products = lazy(() => import('@pages/Products'));
const AddProduct = lazy(() => import('@pages/AddProduct'));

export const Routers: RouteObject[] = [
  {
    path: ROUTES.HOMEPAGE,
    element: <Home />,
  },
  {
    path: ROUTES.SHOP,
    element: <Products />,
  },
  {
    path: ROUTES.ADD_PRODUCT,
    element: <AddProduct />,
  },
];
