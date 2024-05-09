import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@/constants';

const SignIn = lazy(() => import('@/pages/SignIn'));
const Home = lazy(() => import('@/pages/Home'));

export const PUBLIC_ROUTERS: RouteObject[] = [
  {
    path: ROUTES.SIGN_IN,
    element: <SignIn />,
  },
];

export const HOME_ROUTERS: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
];
