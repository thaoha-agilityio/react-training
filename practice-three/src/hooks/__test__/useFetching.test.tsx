import { renderHook } from "@testing-library/react";

import { API_BASE_URL, API_PATH } from "../../constants/api";

import { useFetching } from "../useFetching";
import { IBook } from "../../types/book";

describe("useFetching", () => {
  it("should return the correct data and error state", async () => {
    const url = `${API_BASE_URL}${API_PATH.BOOKS}`;

    const { result } = renderHook(() => useFetching<IBook[]>(url));

    expect(result.current.data).toBeFalsy();
    expect(result.current.error).toBeFalsy();
  });
});
