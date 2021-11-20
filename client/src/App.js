import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/:channel" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
