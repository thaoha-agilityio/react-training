import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Component
import NavItem from "..";

// Mock icon component
const MockIcon = ({ className }: { className: string }) => (
  <svg className={className} data-testid="mock-icon" />
);

describe("NavLink component", () => {
  it("renders with correct label and icon", () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <NavItem to="/tasks" label="Tasks" icon={MockIcon} />
      </MemoryRouter>,
    );

    expect(getByText("Tasks")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("applies active class when isActive is true", () => {
    // Use MemoryRouter to simulate navigation
    const { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={["/tasks"]}>
        <NavItem to="/tasks" label="Active Link" icon={MockIcon} />
      </MemoryRouter>,
    );

    expect(getByText("Active Link")).toHaveClass("text-indigo-600");
    expect(getByTestId("mock-icon")).toHaveClass("fill-indigo-600");
  });

  it("applies inactive class when isActive is false", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavItem to="/tasks" label="Inactive Link" icon={MockIcon} />
      </MemoryRouter>,
    );

    expect(getByText("Inactive Link")).toHaveClass("text-neutral-400");
    expect(getByTestId("mock-icon")).toHaveClass("fill-neutral-400");
  });
});
