import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Category from "..";
import { category } from "../../../constants/mockData";

const mockProps = {
  category: category,
};

describe("testing Category component", () => {
  test("Should match data for Category component", () => {
    render(<Category {...mockProps} />);

    const category = screen.getByTestId("category");

    expect(category).toBeInTheDocument();
  });
});
