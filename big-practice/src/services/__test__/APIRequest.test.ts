import axios from 'axios';
import { api } from '../APIRequest';
import { MOCK_PRODUCTS } from '@constants';
import { IProduct } from '@types';

jest.mock('axios');

const editedData = {
  name: 'name 1',
  image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
  price: 8,
  category: 'category 1',
  description: 'description',
};

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

  it('should make a PUT request and return response data', async () => {
    (axios.put as jest.Mock).mockResolvedValue({
      data: editedData,
    });

    const response = await api.putData<IProduct>({ item: editedData, url: '/products/1' });

    expect(response).toEqual(editedData);
  });

  it('should handle PUT request errors', async () => {
    const errorMessage = 'Failed to edit data';
    (axios.put as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await await api.putData<IProduct>({ item: editedData, url: '/products/1' });
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });
});
