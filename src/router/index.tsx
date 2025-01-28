import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/components/App/App";
import MainPage from "@/pages/MainPage";
import NotFound from "@/pages/NotFound";
import PlantPage from "@/pages/PlantPage";
import { RouteErrorBoundary } from "@/components/commons/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "plant/:id",
    element: <PlantPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
    errorElement: <RouteErrorBoundary />,
  },
]);
