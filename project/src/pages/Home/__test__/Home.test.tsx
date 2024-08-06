import { fireEvent, render, act } from "@testing-library/react";
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

  it("should render Add Task form when click add button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const addButton = getByText("+ Add Tasks");
    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);

    expect(getByText("Add task")).toBeInTheDocument();
  });

  it("should close Add Task form when click cancel button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const addButton = getByText("+ Add Tasks");

    fireEvent.click(addButton);

    act(() => {
      fireEvent.click(getByText("Cancel"));
    });

    expect(addButton).toBeInTheDocument();
  });
});
