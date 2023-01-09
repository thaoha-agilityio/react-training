import { fireEvent, render, screen } from "@testing-library/react";
import { Message } from "..";

describe("Test Message component", () => {
  test("Show the children when checked", () => {
    const test = "Test";

    render(<Message> {test}</Message>);

    // Query function will return element or null if it can't be found
    expect(screen.queryByText(test)).toBeNull();

    // Get function will return element or throw an error if it can't be found
    // the queries can accept a regex to make your selector more resilient to content tweaks and changes
    fireEvent.click(screen.getByLabelText(/show/i));

    expect(screen.getByText(test)).toBeInTheDocument();
  });
});
