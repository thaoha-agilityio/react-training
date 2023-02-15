import Books, { BooksProps } from "../Home/components/Books";
import { render } from "@testing-library/react";
import { AppProvider } from "../../contexts/AppContext";

const mockProps: BooksProps = {
  isGridView: true,
  onSetSelectedBookId: jest.fn(),
};

describe("Testing Books component", () => {
  test("should render the component with the correct", () => {
    render(
      <AppProvider>
        <Books {...mockProps} />
      </AppProvider>
    );
  });
});
