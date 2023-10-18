import { renderHook, waitFor } from '@testing-library/react';

// Hooks
import {
  useFetchProductDetail,
  useFetchProducts,
  useInfiniteProducts,
  useMutationDeleteProduct,
  useMutationEditProduct,
  useMutationPostProduct,
} from '../useProduct';

// Constants
import { INITIAL_PRODUCT, MOCK_PRODUCTS } from '@constants';

// Services
import { api } from '@services/APIRequest';

// Helpers
import { wrapper } from '@helpers';

jest.mock('@services/APIRequest', () => ({
  __esModule: true,
  ...jest.requireActual('@services/APIRequest'),
}));

describe('Test useFetchProduct', () => {
  it('should fetch products and call setProducts', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(MOCK_PRODUCTS);
    const { result } = renderHook(() => useFetchProducts(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(MOCK_PRODUCTS);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('Should return error is false when call useFetchProduct failed', async () => {
    jest.spyOn(api, 'getData').mockRejectedValue(new Error('Error'));
    const { result } = renderHook(() => useFetchProducts(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(undefined);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.error?.message).toEqual('Error');
    });
  });

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
      expect(result.current.data[0]).toEqual(mockProductsMoreThan10);
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
      expect(result.current.data[0]).toEqual(undefined);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.error?.message).toEqual('Error');
    });
  });

  it('Should return data and isSuccess is true when call useMutationDeleteProduct success', async () => {
    jest.spyOn(api, 'deleteData').mockResolvedValue('1');

    const { result } = renderHook(() => useMutationDeleteProduct(), { wrapper });
    result.current.mutate('1');

    await waitFor(() => {
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('Should return data when call useFetchProductDetail success', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(MOCK_PRODUCTS[0]);
    const { result } = renderHook(() => useFetchProductDetail('1'), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(MOCK_PRODUCTS[0]);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('Should return error when call useFetchProductDetail failed', async () => {
    jest.spyOn(api, 'getData').mockRejectedValue(new Error('Error'));
    const { result } = renderHook(() => useFetchProductDetail('1'), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(INITIAL_PRODUCT);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.error?.message).toEqual('Error');
    });
  });

  it('Should return data when call useMutationEditProduct success', async () => {
    jest.spyOn(api, 'putData').mockResolvedValue(MOCK_PRODUCTS[0]);
    const { result } = renderHook(() => useMutationEditProduct(), { wrapper });

    result.current.mutate(MOCK_PRODUCTS[0]);

    await waitFor(() => {
      expect(result.current.data).toEqual(MOCK_PRODUCTS[0]);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('Should return error when call useMutationEditProduct error', async () => {
    jest.spyOn(api, 'putData').mockRejectedValue(new Error('Error'));
    const { result } = renderHook(() => useMutationEditProduct(), { wrapper });

    result.current.mutate(MOCK_PRODUCTS[0]);

    await waitFor(() => {
      expect(result.current.data).toEqual(undefined);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.error?.message).toEqual('Error');
    });
  });

  it('Should return data when call useMutationPostProduct success', async () => {
    jest.spyOn(api, 'postData').mockResolvedValue(MOCK_PRODUCTS[0]);
    const { result } = renderHook(() => useMutationPostProduct(), { wrapper });

    result.current.mutate(MOCK_PRODUCTS[0]);

    await waitFor(() => {
      expect(result.current.data).toEqual(MOCK_PRODUCTS[0]);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('Should return error when call useMutationPostProduct error', async () => {
    jest.spyOn(api, 'postData').mockRejectedValue(new Error('Error'));
    const { result } = renderHook(() => useMutationPostProduct(), { wrapper });

    result.current.mutate(MOCK_PRODUCTS[0]);

    await waitFor(() => {
      expect(result.current.data).toEqual(undefined);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.error?.message).toEqual('Error');
    });
  });
});
