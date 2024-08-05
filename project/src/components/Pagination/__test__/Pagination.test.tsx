// Libs
import { render } from "@testing-library/react";

// Components
import Pagination from "..";

describe("Pagination", () => {
  const mockProps = {
    currentPage: 1,
    totalItems: 10,
    itemsPerPage: 1,
  };

  it("should render the Pagination correctly", () => {
    const { container } = render(<Pagination {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
