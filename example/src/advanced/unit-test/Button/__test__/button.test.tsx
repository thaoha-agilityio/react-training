import * as renderer from "react-test-renderer";
import Button from "..";

describe("Test Button component", () => {
  test("Component Button matches DOM Snapshot", () => {
    const component = renderer
      .create(
        <Button variant={"primary"} size={"small"} styles={"normal"}>
          Button
        </Button>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
