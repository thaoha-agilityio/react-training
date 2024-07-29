import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Components
import NavBar from "..";

describe("NavBar component", () => {
  it("should render the NavBar correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
