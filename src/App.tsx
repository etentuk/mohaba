import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Content from "./components/Content/Content";
import { messageConfig } from "./config";

const App: FC = () => {
  messageConfig();
  return (
    <Router>
      <Content>
        <Routes />
      </Content>
    </Router>
  );
};
export default App;
