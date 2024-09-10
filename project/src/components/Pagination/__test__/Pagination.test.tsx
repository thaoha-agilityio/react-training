// Libs
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Components
import Pagination from "..";

describe("Pagination", () => {
  const mockProps = {
    currentPage: 2,
    totalItems: 10,
    itemsPerPage: 1,
    searchParams: new URLSearchParams("page=1"),
    fetchAtPage: jest.fn(),
  };

  it("should render the Pagination correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Pagination {...mockProps} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
