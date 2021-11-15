import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import ContentHeader from "./components/ContentHeader";
import Messages from "./components/Messages";
import TextArea from "./components/TextArea";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <ContentHeader />
        <Messages />
        <TextArea />
      </div>
    </div>
  );
};

export default App;
