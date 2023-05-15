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
import { CeloProvider } from "@celo/react-celo";
import "@celo/react-celo/lib/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CeloProvider
      dapp={{
        name: "My awesome dApp",
        description: "My awesome description",
        url: "https://sapling.life",
        // if you plan on supporting WalletConnect compatible wallets, you need to provide a project ID, you can find it here: https://docs.walletconnect.com/2.0/cloud/relay
        walletConnectProjectId: "0dfdccbd17dd77eb06919dc89e5e712d",
      }}
    >
      <HashRouter>
        <Switch>
          <Route path="/:link">
            <TreeAnimationPage />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </HashRouter>
    </CeloProvider>
  </React.StrictMode>
);
