import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// components
import { ErrorBoundary } from "..";

const Child = () => {
  throw new Error();
};

describe("testing component ErrorBoundary", () => {
  test("should render error boundary component when there is an error", () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText(
      "Something went wrong! Please try again later!"
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
