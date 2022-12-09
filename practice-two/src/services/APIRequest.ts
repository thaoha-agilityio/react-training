import axios from './config';

const getData = <T>(url: string, params?: object) => axios.get<never, T>(url, params);

const test = async (url: string): Promise<any> => {
  await axios({
    method: 'get',
    url,
    responseType: 'stream',
  }).then(function (response) {
    response.data;
  });
};

export { getData, test };
