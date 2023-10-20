import { BrowserRouter as Router, Route, Routes, RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Fonts
import Fonts from '@themes/components/fonts';

// Routes
import { Routers } from '@routes';

// Custom themes
import CHAKRA_THEME from '@themes';

// Components
import { ErrorBoundary } from '@components';
import MainLayout from '@layouts/MainLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Fonts />
      <ChakraProvider theme={CHAKRA_THEME}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
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
        </ErrorBoundary>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
