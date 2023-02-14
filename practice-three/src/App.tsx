import { Suspense } from "react";

// Components
import { ErrorBoundary } from "./components/ErrorBoundary";
import Home from "./pages/Home";
import { Spinner } from "./components/Spinner";

// Context
import { AppProvider } from "./contexts/AppContext";

import "./App.css";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <AppProvider>
          <Home />
        </AppProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
