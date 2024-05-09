import { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes, RouteObject } from 'react-router-dom';

// Themes
import { theme } from './themes';

// Routers
import { PUBLIC_ROUTERS, HOME_ROUTERS } from '@/routers';
import AuthenticatedRoute from '@/routers/AuthenticatedRoute';
import PublicRoute from '@/routers/PublicRouter';

// Layout
import MainLayout from '@/layouts';

const queryClient = new QueryClient({});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route>
              {PUBLIC_ROUTERS.map(({ path, element }: RouteObject) => (
                <Route
                  key={path}
                  path={path}
                  element={<Suspense fallback={<p>Loading...</p>}>{element}</Suspense>}
                />
              ))}
            </Route>
          </Route>

          <Route element={<AuthenticatedRoute />}>
            <Route element={<MainLayout />}>
              {HOME_ROUTERS.map(({ path, element }: RouteObject) => (
                <Route
                  key={path}
                  path={path}
                  element={<Suspense fallback={<p>Loading...</p>}>{element}</Suspense>}
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
