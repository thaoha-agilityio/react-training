import axios from './config';

const getData = <T>(url: string, params?: object) => axios.get<never, T>(url, params);

export { getData };
