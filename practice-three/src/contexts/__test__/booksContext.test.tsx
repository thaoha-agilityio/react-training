import { useContext } from "react";
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import { BooksContext, BooksProvider, IBookContext } from "../BooksContext";
import { book } from "../../constants/mockData";
import { ERROR_MESSAGE } from "../../constants/message";

const mockContextValue = {
  books: [book],
  isLoading: false,
  error: ERROR_MESSAGE,
  isGridView: true,
  isSortNameStatus: true,
  isSortYearStatus: false,
  searchBooks: jest.fn(),
  getBookById: jest.fn(),
  handleChangeGridView: jest.fn(),
  handleSortByAlphabet: jest.fn(),
  handleSortByReleaseYear: jest.fn(),
  handleFilterByCategories: jest.fn(),
};

describe("Test BooksProvider", () => {
  it("should render the children", () => {
    render(
      <BooksProvider>
        <div data-testid="test-child">Test child</div>
      </BooksProvider>
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("should provide context values to children", () => {
    const Component = () => {
      const { books, isLoading, error } = useContext(BooksContext);
      return (
        <div>
          <p data-testid="books-length">{books.length}</p>
          <p data-testid="is-loading">{isLoading.toString()}</p>
          <p data-testid="error">{error}</p>
        </div>
      );
    };

    const { rerender } = render(
      <BooksProvider>
        <Component />
      </BooksProvider>
    );

    // Check default values
    expect(screen.getByTestId("books-length")).toHaveTextContent("0");
    expect(screen.getByTestId("is-loading")).toHaveTextContent("true");
    expect(screen.getByTestId("error")).toHaveTextContent("");

    rerender(
      <BooksContext.Provider
        value={mockContextValue as unknown as IBookContext}
      >
        <Component />
      </BooksContext.Provider>
    );

    // Check updated context values
    expect(screen.getByTestId("books-length")).toHaveTextContent(
      mockContextValue.books.length.toString()
    );
    expect(screen.getByTestId("is-loading")).toHaveTextContent(
      mockContextValue.isLoading.toString()
    );
    expect(screen.getByTestId("error")).toHaveTextContent(
      mockContextValue.error
    );
  });

  it("should call getBookById when a card item is clicked", () => {
    render(
      <BooksContext.Provider
        value={mockContextValue as unknown as IBookContext}
      >
        <button onClick={() => mockContextValue.getBookById("1")}>
          Selected card item
        </button>
      </BooksContext.Provider>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockContextValue.getBookById).toHaveBeenCalledWith("1");
  });

  it("should call handleChangeGridView when a button is clicked", () => {
    render(
      <BooksContext.Provider
        value={mockContextValue as unknown as IBookContext}
      >
        <button onClick={() => mockContextValue.handleChangeGridView()}>
          List
        </button>
      </BooksContext.Provider>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockContextValue.handleChangeGridView).toHaveBeenCalledWith();
  });

  it("should call handleSortByAlphabet when a button is clicked", () => {
    render(
      <BooksContext.Provider
        value={mockContextValue as unknown as IBookContext}
      >
        <button onClick={() => mockContextValue.handleSortByAlphabet()}>
          List
        </button>
      </BooksContext.Provider>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockContextValue.handleSortByAlphabet).toHaveBeenCalledWith();
  });

  it("should call handleSortByReleaseYear when a button is clicked", () => {
    render(
      <BooksContext.Provider
        value={mockContextValue as unknown as IBookContext}
      >
        <button onClick={() => mockContextValue.handleSortByReleaseYear()}>
          List
        </button>
      </BooksContext.Provider>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockContextValue.handleSortByReleaseYear).toHaveBeenCalledWith();
  });

  it("should call handleFilterByCategories when a button is clicked", () => {
    render(
      <BooksContext.Provider
        value={mockContextValue as unknown as IBookContext}
      >
        <button onClick={() => mockContextValue.handleFilterByCategories("1")}>
          List
        </button>
      </BooksContext.Provider>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockContextValue.handleFilterByCategories).toHaveBeenCalledTimes(1);
  });
});
