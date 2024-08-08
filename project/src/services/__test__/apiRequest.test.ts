import { api } from "../apiRequest";

describe("API request", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("fetches successfully data from an API", async () => {
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
    const response = await api.getData("/tasks");
    expect(response).toEqual(mockResponse);
  });

  it("should return error message when fetching data from an API", async () => {
    const errorMessage = "Network Error";

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockRejectedValue(new Error(errorMessage)),
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
    const mockResponse = [
      {
        id: 1,
        tile: "Integrate API",
      },
    ];
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });
    const response = await api.putData("/tasks", {
      ...mockResponse,
    });
    expect(response).toEqual(mockResponse);
  });

  it("should make a Delete request and return response data", async () => {
    const mockResponse = [
      {
        id: 1,
        tile: "Integrate API",
      },
    ];

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const response = await api.deleteData("/tasks/1");

    expect(response).toEqual(mockResponse);
  });
});
