import "@testing-library/jest-dom";
import axios from "axios";

import { API_BASE_URL, API_PATH } from "../../constants/api";
import { getData } from "../APIRequest";
import { books } from "../../constants/mockData";

jest.mock("axios");
jest.mock("../config");

describe("getData", () => {
  describe("when API call is successful", () => {
    it("should return all books", async () => {
      axios.get.mockResolvedValueOnce(books);

      // when
      const result = await getData(`${API_BASE_URL}${API_PATH.books}`);

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${API_BASE_URL}${API_PATH.books}`
      );
      expect(result).toEqual(books.data);
    });
  });
});
