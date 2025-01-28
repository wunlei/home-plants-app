import { Component, ErrorInfo, ReactNode } from "react";
import { useRouteError } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h2 style={{ textAlign: "center" }}>Something went wrong</h2>;
    }

    return this.props.children;
  }
}

export function RouteErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Something went wrong</h2>
    </div>
  );
}

export default ErrorBoundary;
