import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Hello } from "./index";

let container: HTMLElement | null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container!);
  container!.remove();
  container = null;
});

it("renders with or without a name", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Hello />, container);
  });
  expect(container!.textContent).toBe("Hey, stranger");

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container!.textContent).toBe("Hello, Jenny!");

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container!.textContent).toBe("Hello, Margaret!");
});
