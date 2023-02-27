import { DeskproAppProvider } from "@deskpro/app-sdk";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
ReactDOM.render(
  <React.StrictMode>
    <DeskproAppProvider>
      <App />
    </DeskproAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
