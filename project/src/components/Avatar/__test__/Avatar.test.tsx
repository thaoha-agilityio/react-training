import { render } from "@testing-library/react";

// Component
import Avatar from "..";

describe("Avatar", () => {
  it("renders button with correct styles and children", () => {
    const { container } = render(
      <Avatar
        src="https://kenh14cdn.com/203336854389633024/2023/3/13/photo-7-16786962482381491930068.jpg"
        alt="avatar"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders button with correct styles and children", () => {
    const { getByAltText } = render(
      <Avatar
        src="https://kenh14cdn.com/203336854389633024/2023/3/13/photo-7-16786962482381491930068.jpg"
        alt="avatar"
        size="medium"
      />,
    );

    const img = getByAltText("avatar");
    expect(img).toHaveClass("rounded-full w-[160px] h-[160px]");
  });
});
