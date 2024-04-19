import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./Internationalization/i18n.ts";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { AuthProvider } from "@mgi-labs/mgi-id";

const backendUrl = import.meta.env.REACT_APP_BACKEND_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App backendUrl={backendUrl ?? ""} />
        </BrowserRouter>
      </I18nextProvider>
    </AuthProvider>
  </React.StrictMode>
);
