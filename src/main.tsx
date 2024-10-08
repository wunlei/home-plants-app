import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/normalize.scss";
import "@/styles/index.scss";
import App from "./components/App/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
