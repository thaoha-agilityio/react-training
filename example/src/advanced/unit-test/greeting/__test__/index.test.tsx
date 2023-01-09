import { fireEvent, render, screen } from "@testing-library/react";
import * as renderer from "react-test-renderer";
import { Greeting } from "..";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Component Greeting should render correctly", () => {
    const component = renderer.create(<Greeting />).toJSON();

    expect(component).toMatchSnapshot();
  });

  test("renders good to see you if the button was Not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    // fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'It's good to see you!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).not.toBeInTheDocument();
  });
});
