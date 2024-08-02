import { render } from "@testing-library/react";

// Components
import UserProfile from "..";

// Mocks
import { USER } from "@/mocks";

describe("UserProfile  Component", () => {
  it("should render UserProfile  Component correctly", () => {
    const component = render(<UserProfile {...USER} />);

    expect(component).toMatchSnapshot();
  });

  it("should render name and avatar correctly", () => {
    const { getByText, getByRole } = render(<UserProfile {...USER} />);

    const roleElement = getByText(USER.role);
    expect(roleElement).toBeInTheDocument();

    const avatarElement = getByRole("img");
    expect(avatarElement).toHaveAttribute("src", USER.avatar);
  });
});
