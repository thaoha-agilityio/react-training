import { Component, ErrorInfo, ReactNode, useState } from "react";

type StateProp = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

type ErrorBoundaryProp = {
  children: ReactNode;
};

export class ErrorBoundary extends Component<ErrorBoundaryProp, StateProp> {
  constructor(props: ErrorBoundaryProp) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render(): ReactNode {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>An Error Has Occurred</h2>
          <details>
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>{this.state.errorInfo.componentStack}</p>
          </details>
        </div>
      );
    }

    return <div>{this.props.children}</div>;
  }
}

const Counter = () => {
  const [state, setState] = useState<number>(0);

  const handleClick = () => {
    setState((prev) => prev + 1);
  };

  const CounterResult = () => {
    if (state === 3) {
      throw new Error("Crashed!!!!");
    }

    return <h1 onClick={handleClick}>{state}</h1>;
  };

  return <CounterResult />;
};

export const ExampleErrorBoundary = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>Error boundaries</h3>
        <p>
          Program is made such a way that as soon as the counter reaches the
          value of 3, Error boundaries will throw an error.
        </p>
      </div>
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          then the effect will be done on both as the error boundary will
          replace both of them.
        </p>
        <Counter />
        <Counter />
      </ErrorBoundary>
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
};
