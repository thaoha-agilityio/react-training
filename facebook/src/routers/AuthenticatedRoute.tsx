import { Navigate, Outlet } from 'react-router-dom';

// Stores
import { useAuthStore } from '@/stores';

// Constants
import { ROUTES } from '@/constants';

const AuthenticatedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} replace={true} />;
  }

  return <Outlet />;
};

export default AuthenticatedRoute;
