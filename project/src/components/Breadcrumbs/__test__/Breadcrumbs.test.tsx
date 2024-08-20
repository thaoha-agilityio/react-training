import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

// Components
import Breadcrumbs from "..";

describe("Breadcrumbs component", () => {
  const breadcrumbs = [
    { href: "/home", label: "Home" },
    { href: "/tasks", label: "Tasks" },
    { href: "/tasks/1", label: "Task 1" },
  ];
  it("should render breadcrumb links with correct labels and hrefs", () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </MemoryRouter>,
    );

    expect(getByRole("navigation")).toBeInTheDocument();
    expect(getByText("Home")).toHaveAttribute("href", "/home");
    expect(getByText("Tasks")).toHaveAttribute("href", "/tasks");
    expect(getByText("Task 1")).toHaveAttribute("href", "/tasks/1");
  });
});
