import { API_BASE_URL } from "@/constants";

const apiRequest = async <T>(
  url: string,
  {
    method = "GET",
    data,
    headers,
  }: { method?: string; data?: Partial<T>; headers?: HeadersInit } = {},
): Promise<Response> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response;
    }
    const responseError = await response.json();
    throw responseError;
  } catch (error) {
    throw error as Error;
  }
};

const getData = async <T>(
  url: string,
  headers?: HeadersInit,
): Promise<{ data: T; total: string }> => {
  const response = await apiRequest(`${API_BASE_URL}/${url}`, { headers });
  const total = response.headers.get("X-Total-Count") || "";

  return {
    data: await response.json(),
    total,
  };
};

const putData = async <T>(
  url: string,
  data: Partial<T>,
  headers?: HeadersInit,
): Promise<T> => {
  const response = await apiRequest(`${API_BASE_URL}/${url}`, {
    method: "PUT",
    data,
    headers,
  });

  return response.json();
};

const postData = async <T>(
  url: string,
  data: Partial<T>,
  headers?: HeadersInit,
): Promise<T> => {
  const response = await apiRequest(`${API_BASE_URL}/${url}`, {
    method: "POST",
    data,
    headers,
  });

  return response.json();
};

const deleteData = async (
  url: string,
  headers?: HeadersInit,
): Promise<Response> => {
  const response = await apiRequest(`${API_BASE_URL}/${url}`, {
    method: "DELETE",
    headers,
  });

  return response.json();
};

const api = { getData, postData, deleteData, putData };

export { api };
