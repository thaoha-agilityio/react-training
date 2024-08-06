import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders heading", async () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
