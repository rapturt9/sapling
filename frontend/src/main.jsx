import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import TreeAnimationPage from "./TreeAnimationPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/:address">
          <TreeAnimationPage />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>
);
