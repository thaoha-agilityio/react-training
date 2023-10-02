import { BrowserRouter as Router, Route, Routes, RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

// Routes
import { Routers } from '@routers';
import MainLayout from '@layouts/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {Routers.map(({ path, element }: RouteObject) => (
            <Route
              key={path}
              path={path}
              element={<Suspense fallback={<Spinner />}>{element}</Suspense>}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
