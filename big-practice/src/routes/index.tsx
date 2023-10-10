import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants';
import Home from '@pages/Home';

// Pages
// const Home = lazy(() => import('@pages/Home'));
const Shop = lazy(() => import('@pages/Shop'));
const AddProduct = lazy(() => import('@pages/AddProduct'));
const ProductDetails = lazy(() => import('@pages/ProductDetails'));
const EditProduct = lazy(() => import('@pages/EditProduct'));
const ShoppingCart = lazy(() => import('@pages/ShoppingCart'));

export const Routers: RouteObject[] = [
  {
    path: ROUTES.HOMEPAGE,
    element: <Home />,
  },
  {
    path: ROUTES.SHOP,
    element: <Shop />,
  },
  {
    path: ROUTES.ADD_PRODUCT,
    element: <AddProduct />,
  },
  {
    path: ROUTES.DETAIL_PRODUCT,
    element: <ProductDetails />,
  },
  {
    path: ROUTES.EDIT_PRODUCT,
    element: <EditProduct />,
  },
  {
    path: ROUTES.SHOPPING_CART,
    element: <ShoppingCart />,
  },
];
