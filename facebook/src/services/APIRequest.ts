import axios from './config';

// Fetches data from the URL using a GET request.
const getData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);

  return response.data;
};

// Sends a POST request to URL with data provided as an argument.
const postData = async <T>(url: string, arg: T): Promise<T> => {
  const response = await axios.post<T>(url, arg);

  return response.data;
};

const api = { getData, postData };

export { api };
