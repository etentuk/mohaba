import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Content from "./components/Content/Content";

const App: FC = () => (
  <Router>
    <Content>
      <Routes />
    </Content>
  </Router>
);
export default App;
