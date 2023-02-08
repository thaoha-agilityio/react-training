import axios from "axios";

const getData = async <T>(url: string): Promise<T | string> => {
  try {
    const res = await axios.get<T>(url);

    return res.data;
  } catch (error: any) {
    return `An error occurred while fetching the data : ${error.message}`;
  }
};

const api = { getData };

export { api };
