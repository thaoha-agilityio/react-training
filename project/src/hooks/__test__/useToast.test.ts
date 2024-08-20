import { toast } from "react-toastify";
import { renderHook } from "@testing-library/react";

// Constants
import { TOAST_AUTO_CLOSE, TOAST_POSITION, TOAST_STATUS } from "@/constants";

import { useToast } from "..";

describe("useToast", () => {
  it("should call toast function with correct parameters when showToast is called", () => {
    const { result } = renderHook(() => useToast());
    result.current.showToast("This is a success message", TOAST_STATUS.SUCCESS);

    expect(toast).toHaveBeenCalled();
  });

  it("should display a toast with the specified position", () => {
    const { result } = renderHook(() => useToast());
    const { showToast } = result.current;

    const message = "Test message";
    const status = TOAST_STATUS.ERROR;
    const position = TOAST_POSITION.BOTTOM_RIGHT;

    showToast(message, status, position);

    expect(toast).toHaveBeenCalledWith(message, {
      autoClose: TOAST_AUTO_CLOSE,
      type: status,
      position: position,
      style: { fontSize: "12px" },
    });
  });
});
