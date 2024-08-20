import { api } from "../apiRequest";

// Mocks
import { TASKS } from "@/mocks";

describe("API request", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("fetches successfully data from an API", async () => {
    const mockTotal = "4";
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(TASKS),
      headers: {
        get: jest.fn().mockReturnValue(mockTotal),
      },
    });
    const response = await api.getData("/tasks");
    expect(response).toEqual({
      data: TASKS,
      total: mockTotal,
    });
  });

  it("should return error message when fetching data from an API", async () => {
    const errorMessage = "Network Error";

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockRejectedValue(new Error(errorMessage)),
      headers: {
        get: jest.fn().mockReturnValue(""),
      },
    });

    try {
      await api.getData("/tasks");
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });

  it("should return value when call postData success", async () => {
    const mockResponse = [
      {
        id: 0,
        tile: "Integrate API",
      },
    ];
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });
    const response = await api.postData("/tasks", {
      ...mockResponse,
    });
    expect(response).toEqual(mockResponse);
  });

  it("should make a Put request and return response data", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(TASKS),
    });
    const response = await api.putData("/tasks", {
      ...TASKS,
    });
    expect(response).toEqual(TASKS);
  });

  it("should make a Delete request and return response data", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(TASKS),
    });

    const response = await api.deleteData("/tasks/1");

    expect(response).toEqual(TASKS);
  });
});
