import "./instrument.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { reactErrorHandler } from "@sentry/react";

const root = ReactDOM.createRoot(document.getElementById("root") as Element, {
  onRecoverableError: reactErrorHandler(),
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
