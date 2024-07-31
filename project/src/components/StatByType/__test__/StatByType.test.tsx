import { render } from "@testing-library/react";

// Components
import StatByType from "..";

import { STAT_STATUS } from "@/constants";

describe("StatByType component", () => {
  const mockProps = {
    total: 100,
    label: "To do",
    type: STAT_STATUS.TODO,
  };

  it("should render the StatByType correctly", () => {
    const { container } = render(<StatByType {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("applies the correct background class for the icon", () => {
    const { container } = render(<StatByType {...mockProps} />);

    // Check if the correct background class is applied
    const iconContainer = container.querySelector(".rounded-full");
    expect(iconContainer).toHaveClass("bg-blue-100");
  });
});
