import { renderHook } from "@testing-library/react";
import { useContext } from "react";
import { BooksProvider, BooksContext } from "../BooksContext";
import { api } from "../../services/APIRequest";
import { books } from "../../constants/mockData";

describe("BooksProvider", () => {
  it("provides books context with correct values", async () => {
    jest.spyOn(api, "getData").mockResolvedValue({ data: books.data });

    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <BooksProvider>{children}</BooksProvider>
    );

    const spyHandleChangeGridView = jest.fn();
    const spyHandleSortByAlphabet = jest.fn();
    const spyHandleSortByReleaseYear = jest.fn();
    const spyHandleFilterByCategories = jest.fn();

    const { result } = renderHook(() => useContext(BooksContext), {
      wrapper,
    });
    console.log("fetch", result.current);
    console.log("test", books.data);

    expect(result.current.books).toEqual(books.data);
    // expect(result.current.error).toBe("");
    // expect(result.current.searchBooks).toBeInstanceOf(Function);
    // expect(result.current.getBookById).toBeInstanceOf(Function);
    // expect(result.current.isGridView).toBe(true);
    // expect(result.current.isSortNameStatus).toBe(false);
    // expect(result.current.isSortYearStatus).toBe(false);
    // expect(result.current.handleChangeGridView).toBeInstanceOf(Function);
    // expect(result.current.handleSortByAlphabet).toBeInstanceOf(Function);
    // expect(result.current.handleSortByReleaseYear).toBeInstanceOf(Function);
    // expect(result.current.handleFilterByCategories).toBeInstanceOf(Function);
  });
});
