import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
const HomeModule = React.lazy(() => import("./modules/HomeModule"));
const DashboardModule = React.lazy(() => import("./modules/DashboardModule"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
