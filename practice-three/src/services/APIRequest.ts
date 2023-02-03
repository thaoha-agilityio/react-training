import axios from "axios";

const getData = async <T>(url: string): Promise<T> => {
  const res = await axios.get<T>(url);

  return res.data;
};

export { getData };
