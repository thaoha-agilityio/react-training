import axios, { AxiosError, AxiosResponse } from 'axios';

export const getData = async <T>(url: string): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.get<T>(url);

    if (res.status !== 200) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

const api = { getData };

export { api };
