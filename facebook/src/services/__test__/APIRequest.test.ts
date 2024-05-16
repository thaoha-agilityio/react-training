import axios from '../config';

// Services
import { api } from '../APIRequest';

// Mocks
import { POSTS } from '@/mocks';

jest.mock('../config');

describe('API request', () => {
  it('fetches successfully data from an API', async () => {
    // Mock Axios GET request to return a successful response
    (axios.get as jest.Mock).mockResolvedValue({ status: 200, data: 'test data' });

    const result = await api.getData('/posts');

    expect(result).toEqual('test data');
  });

  it('handles an error when fetching data from an API', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await api.getData('/posts');
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });

  it('should return value when call postData success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: POSTS[0],
    });

    const response = await api.postData('/posts', POSTS[0]);

    expect(response).toEqual(POSTS[0]);
  });

  it('should return error message when call postData failed', async () => {
    const errorMessage = 'Failed to post data';
    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await api.postData('/posts', POSTS[0]);
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });

  it('should make a Patch request and return response data', async () => {
    (axios.patch as jest.Mock).mockResolvedValue({
      data: POSTS[0],
    });

    const response = await api.patchData('/products/1', POSTS[0]);

    expect(response).toEqual(POSTS[0]);
  });

  it('should handle Patch request errors', async () => {
    const errorMessage = 'Failed to edit data';
    (axios.patch as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await api.patchData('/products/1', POSTS[0]);
    } catch (error) {
      expect((error as { message: string }).message).toBe(errorMessage);
    }
  });
});
