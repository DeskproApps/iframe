import './instrument';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DeskproAppProvider } from "@deskpro/app-sdk";
import "./main.css";
import { reactErrorHandler } from '@sentry/react';

const root = ReactDOM.createRoot(document.getElementById('root') as Element, {
  onRecoverableError: reactErrorHandler(),
});
root.render(
  <React.StrictMode>
    <DeskproAppProvider>
      <App />
    </DeskproAppProvider>
  </React.StrictMode>
);
