import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants';

// Pages
const Home = lazy(() => import('@pages/Home'));
const Products = lazy(() => import('@pages/Products'));
const AddProduct = lazy(() => import('@pages/AddProduct'));
const ProductDetails = lazy(() => import('@pages/ProductDetails'));

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
  {
    path: ROUTES.DETAIL_PRODUCT,
    element: <ProductDetails />,
  },
];
