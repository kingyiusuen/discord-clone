import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useWindowWidth } from "./hooks";
import LoginPage from "./components/LoginPage";
import { DesktopLayout, MobileLayout } from "./layout";
import { RequireAuth } from "./routes";

const App = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />
        <Route
          path="/channels/:channel"
          element={
            <RequireAuth>
              {isMobile ? <MobileLayout /> : <DesktopLayout />}
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
