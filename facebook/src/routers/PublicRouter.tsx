// Libs
import { Navigate, Outlet } from 'react-router-dom';

// Stores
import { useAuthStore } from '@/stores';

// Constants
import { ROUTES } from '@/constants';

const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace={true} />;
  }

  return <Outlet />;
};

export default PublicRoute;
