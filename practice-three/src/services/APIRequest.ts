import axios from "axios";
import { ERROR_MESSAGE } from "../constants/message";

const getData = async <T>(url: string): Promise<T | undefined> => {
  try {
    const res = await axios.get<T>(url);

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    alert(ERROR_MESSAGE);
  }
};

const api = { getData };

export { api };
