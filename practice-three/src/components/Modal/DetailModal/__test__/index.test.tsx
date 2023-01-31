import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { book } from "../../../../constants/mockData";

import DetailModal from "..";

describe("Testing component DrawerDetailBook", () => {
  test("Should show detail book", () => {
    render(<DetailModal book={book} />);

    expect(screen.getByText(book.name)).toBeInTheDocument();
  });
});
