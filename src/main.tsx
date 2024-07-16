import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./routes/index.tsx";

import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: We know that this node exists.
ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
