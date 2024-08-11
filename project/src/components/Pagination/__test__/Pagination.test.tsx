// Libs
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

// Components
import Pagination from "..";

describe("Pagination", () => {
  const mockProps = {
    currentPage: 1,
    totalItems: 10,
    itemsPerPage: 1,
    onChangePage: jest.fn(),
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
