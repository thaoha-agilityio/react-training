import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Home from "..";

describe("Home page", () => {
  it("should render the Home correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
