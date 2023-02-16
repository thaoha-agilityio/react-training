// libs
import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
  }

  public render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      return (
        <div>
          <h2>Oops !!</h2>
          <p>Something went wrong! Please try again later!</p>
          <p>{error && error.toString()}</p>
          <a href="/">Back to Home page</a>
        </div>
      );
    }

    return children;
  }
}
