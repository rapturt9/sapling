import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TreeAnimationPage from "./TreeAnimationPage.jsx";
import { MoralisProvider } from "react-moralis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoralisProvider initializeOnMount={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path=":address" element={<TreeAnimationPage />} />
        </Routes>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>
);
