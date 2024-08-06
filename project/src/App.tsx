import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouteObject,
} from "react-router-dom";
import { Suspense } from "react";

// Routers
import { Routers } from "./routes";

// Components
import MainLayout from "./layouts";
import { SpinnerIcon } from "@/components/Icons";

const App = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        {Routers.map(({ path, element }: RouteObject) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<SpinnerIcon />}>{element}</Suspense>}
          />
        ))}
      </Route>
    </Routes>
  </Router>
);

export default App;
