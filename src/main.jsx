import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EntityProvider } from "./context/EntityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EntityProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EntityProvider>
  </StrictMode>
);
