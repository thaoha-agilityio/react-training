import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

// Layouts
import MainLayout from '@layouts/MainLayout';

// components
import { Home } from '@pages/Home';

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
