import "@testing-library/jest-dom";
import axios from "axios";

import { API_BASE_URL, API_PATH } from "../../constants/api";
import { api } from "../APIRequest";
import { books } from "../../constants/mockData";

jest.mock("axios");

describe("getData", () => {
  describe("when API call is successful", () => {
    it("should return all books", async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce(books);

      // when
      const result = await api.getData(`${API_BASE_URL}${API_PATH.BOOKS}`);

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${API_BASE_URL}${API_PATH.BOOKS}`
      );
      expect(result.data).toEqual(books.data);
    });
  });
});
