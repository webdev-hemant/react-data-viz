import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomeModule = React.lazy(() => import("./modules/HomeModule"));
const DashboardModule = React.lazy(() => import("./modules/DashboardModule"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<h1>Loading....</h1>}>
              <HomeModule />
            </React.Suspense>
          }
        />
        <Route
          path="/dashboard"
          exact
          element={
            <React.Suspense fallback={<h1>Loading....</h1>}>
              <DashboardModule />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
