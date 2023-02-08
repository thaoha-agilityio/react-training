import axios from "axios";

const getData = async <T>(url: string): Promise<T | any> => {
  try {
    const res = await axios.get<T>(url);

    return {
      data: res.data,
      error: "",
    };
  } catch (error: any) {
    return {
      data: [],
      error: error,
    };
  }
};

const api = { getData };

export { api };
