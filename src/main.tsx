import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/state/store.ts";
import { router } from "@/router/index.tsx";
import { RouterProvider } from "react-router-dom";
import "@/styles/normalize.scss";
import "@/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
