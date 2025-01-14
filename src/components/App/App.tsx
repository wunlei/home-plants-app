import { Outlet } from "react-router-dom";
import ErrorBoundary from "@/components/commons/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}

export default App;
