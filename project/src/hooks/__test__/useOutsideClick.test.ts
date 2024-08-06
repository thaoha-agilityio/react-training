import { act, renderHook } from "@testing-library/react";

// Hooks
import { useOutsideClick } from "../useOutsideClick";

describe("useOutsideClick", () => {
  it("Should call handler when clicking outside the ref element", () => {
    const handler = jest.fn();
    const ref = { current: document.createElement("div") };

    renderHook(() => useOutsideClick(ref, handler));

    // Simulate a click event outside the ref element
    act(() => {
      document.dispatchEvent(new Event("mousedown"));
    });

    expect(handler).toHaveBeenCalled();
  });

  it("Should not call handler when clicking inside the ref element", () => {
    const handler = jest.fn();
    const ref = { current: document.createElement("div") };

    renderHook(() => useOutsideClick(ref, handler));

    // Simulate a click event inside the ref element
    act(() => {
      ref.current.dispatchEvent(new Event("mousedown"));
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
