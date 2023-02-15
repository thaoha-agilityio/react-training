import { render } from "@testing-library/react";
import { AppProvider } from "../../contexts/AppContext";
import Home from "../Home";

describe("Avatar render", () => {
  test("Ensure image avatar render correctly", () => {
    render(
      <AppProvider>
        <Home />
      </AppProvider>
    );
  });
});
