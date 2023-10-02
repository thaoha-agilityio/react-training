import { renderHook, waitFor } from '@testing-library/react';

// Hooks
import { useFetchProducts, useInfiniteProducts } from '../useProduct';

// Constants
import { LIMIT_PRODUCTS, MOCK_PRODUCTS } from '@constants';

// Services
import { api } from '@services/api-request';

// Helpers
import { wrapper } from '@helpers';

jest.mock('@services/api-request', () => ({
  __esModule: true,
  ...jest.requireActual('@services/api-request'),
}));

describe('Test useFetchProduct', () => {
  it('should fetch products and call setProducts', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(MOCK_PRODUCTS);
    const { result } = renderHook(() => useFetchProducts({ limit: LIMIT_PRODUCTS }), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(MOCK_PRODUCTS);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('Should return error and isSuccess is false when call useFetchProduct failed', async () => {
    jest.spyOn(api, 'getData').mockRejectedValue(new Error('Error'));
    const { result } = renderHook(() => useFetchProducts({ limit: LIMIT_PRODUCTS }), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(undefined);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.error?.message).toEqual('Error');
    });
  });
});

// Test useInfiniteProducts hooks
describe('Test useInfiniteProducts', () => {
  it('Should return data and isSuccess is true when call useInfiniteProducts success', async () => {
    const mockProductsMoreThan10 = [
      ...Array.from({ length: 12 }, (_, index) => ({
        ...MOCK_PRODUCTS[0],
        id: `id_${index + 1}`,
      })),
    ];

    jest.spyOn(api, 'getData').mockResolvedValue(mockProductsMoreThan10);
    const { result } = renderHook(() => useInfiniteProducts(10), { wrapper });

    await waitFor(() => {
      expect(result.current.data?.pages[0]).toEqual(mockProductsMoreThan10);
      expect(result.current.isSuccess).toEqual(true);
    });

    result.current.fetchNextPage();
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  });

  it('Should return error and isSuccess is false when call useInfiniteProducts failed', async () => {
    jest.spyOn(api, 'getData').mockRejectedValue(new Error('Error'));
    const { result } = renderHook(() => useInfiniteProducts(2), { wrapper });

    await waitFor(() => {
      expect(result.current.data?.pages).toEqual(undefined);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.error?.message).toEqual('Error');
    });
  });
});
