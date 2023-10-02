import axios, { AxiosError, AxiosResponse } from 'axios';

export const getData = async <T>(url: string): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.get<T>(url);

    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const postData = async <T>({ item, url }: { item: T; url: string }): Promise<T> => {
  try {
    const response = await axios.post<T>(url, item);

    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

const api = { getData, postData };

export { api };
