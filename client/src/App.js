import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import { RequireAuth } from "./routes/routes";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/channel/:channel" element={<RequireAuth><Dashboard /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
