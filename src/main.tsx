import { Providers } from "./contexts/index.tsx";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
