import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/:channel" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
