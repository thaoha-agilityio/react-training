import axios from 'axios';
import { api } from '../APIRequest';
import { MOCK_PRODUCTS } from '@constants';
import { IProduct } from '@types';

jest.mock('axios');

describe('API request', () => {
  it('fetches successfully data from an API', async () => {
    // Mock Axios GET request to return a successful response
    (axios.get as jest.Mock).mockResolvedValue({ status: 200, data: 'test data' });

    const result = await api.getData('/products');

    expect(result).toEqual('test data');
  });

  it('handles an error when fetching data from an API', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await api.getData('/products');
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });

  it('should return value when call postData success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: MOCK_PRODUCTS[1],
    });

    const response = await api.postData<IProduct>({ item: MOCK_PRODUCTS[1], url: '/products' });

    expect(response).toEqual(MOCK_PRODUCTS[1]);
  });

  it('should return error message when call postData failed', async () => {
    const errorMessage = 'Failed to post data';
    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await await api.postData<IProduct>({ item: MOCK_PRODUCTS[1], url: '/products' });
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });
});
