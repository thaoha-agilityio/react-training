// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Pagination from "..";

describe("Pagination", () => {
  const mockProps = {
    currentPage: 2,
    totalItems: 10,
    itemsPerPage: 1,
    onChangePage: jest.fn(),
  };

  it("should render the Pagination correctly", () => {
    const { container } = render(<Pagination {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("should call onChangePage when button previous click", () => {
    const { getByRole } = render(<Pagination {...mockProps} />);
    const previousButton = getByRole("button", {
      name: "Previous",
    });

    expect(previousButton).toBeInTheDocument();
    fireEvent.click(previousButton);
    expect(mockProps.onChangePage).toHaveBeenCalledWith(
      mockProps.currentPage - 1,
    );
  });

  it("should call onChangePage when button next click", () => {
    const { getByRole } = render(<Pagination {...mockProps} />);
    const nextButton = getByRole("button", {
      name: "Next",
    });

    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(mockProps.onChangePage).toHaveBeenCalledWith(
      mockProps.currentPage + 1,
    );
  });

  it("should call onChangePage when specific page", () => {
    const { getByRole } = render(<Pagination {...mockProps} />);
    const firstPageButton = getByRole("button", {
      name: "1",
    });

    expect(firstPageButton).toBeInTheDocument();
    fireEvent.click(firstPageButton);
    expect(mockProps.onChangePage).toHaveBeenCalledWith(1);
  });
});
