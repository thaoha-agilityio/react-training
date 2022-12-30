import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./AnotherComponent "));

export const MyComponent = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<OtherComponent />} />
            <Route path="/other" element={<AnotherComponent />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};
