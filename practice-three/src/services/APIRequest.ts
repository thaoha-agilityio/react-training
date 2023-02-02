import axios from "axios";

const getData = async <T>(url: string): Promise<T> => {
  const res = await axios.get<T>(url);
  console.log("get Data: ", res.data);
  return res.data;
};

export { getData };
