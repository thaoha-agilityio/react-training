import { renderHook } from "@testing-library/react";

import { useFetching } from "../useFetching";
import { IBook } from "../../types/book";
import { books } from "../../constants/mockData";

import { api } from "../../services/APIRequest";

jest.mock("../../services/APIRequest");
describe("useFetching", () => {
  it("should return the correct data and error state", async () => {
    (api.getData as jest.Mock).mockResolvedValue(books);
    const { result } = renderHook(() => useFetching<IBook[]>("url"));

    expect(result.current.data).toBeFalsy();
  });
});
