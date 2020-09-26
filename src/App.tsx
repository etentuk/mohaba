import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

const App: FC = () => (
  <Router>
    <Routes />
  </Router>
);
export default App;
