import { BrowserRouter as Router, Route, Routes, RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

// Routes
import { Routers } from '@routers';

const App = () => {
  return (
    <Router>
      <Routes>
        {Routers.map(({ path, element }: RouteObject) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<Spinner />}>{element}</Suspense>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
