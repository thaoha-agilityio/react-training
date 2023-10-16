import { AxiosError } from 'axios';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// Stores
import { useProductStore } from '@stores';

// Constants
import { INITIAL_PRODUCT, QUERY_KEYS, URL } from '@constants';

// Types
import { IProduct } from '@types';

// Services
import { api } from '@services/APIRequest';

export const useFetchProducts = () => {
  const setProducts = useProductStore((state) => state.setProducts);

  return useQuery<IProduct[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: async () => await api.getData(`${URL.BASE}${URL.PRODUCTS}`),
    onSuccess: (data: IProduct[]) => setProducts(data),
    onError: (error) => error.message,
  });
};

//  Custom hook to get Products with pagination
export const useInfiniteProducts = (limit: number) => {
  const setProducts = useProductStore((state) => state.setProducts);

  const { data, ...rest } = useInfiniteQuery<IProduct[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: async ({ pageParam = 1 }) =>
      await api.getData(`${URL.BASE}${URL.PRODUCTS}?page=${pageParam}&limit=${limit}`),
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return lastPage?.length > 0 && lastPage?.length === limit ? nextPage : undefined;
    },
    onSuccess: (data) => setProducts(data.pages[0]),
  });

  return {
    data: data?.pages || [],
    ...rest,
  };
};

//  Custom hook post product
export const useMutationPostProduct = () => {
  return useMutation<IProduct, AxiosError, IProduct>({
    mutationFn: async (product) =>
      await api.postData({ item: product, url: `${URL.BASE}${URL.PRODUCTS}` }),
    onSuccess: (res: IProduct) => res,
    onError: (error) => error.message,
  });
};

// Custom hook fetch product
export const useFetchProductDetail = (id: string) => {
  return useQuery<IProduct, AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCT + id],
    queryFn: async () => await api.getData(`${URL.BASE}${URL.PRODUCTS}/${id}`),
    onSuccess: (res: IProduct) => res,
    onError: (error) => error.message,
    initialData: INITIAL_PRODUCT,
  });
};

// Custom hook edit product
export const useMutationEditProduct = () => {
  return useMutation<IProduct, AxiosError, IProduct>({
    mutationFn: async (product) => {
      const { id } = product;
      return await api.putData({ item: product, url: `${URL.BASE}${URL.PRODUCTS}/${id}` });
    },
    onSuccess: (res: IProduct) => res,
    onError: (error) => error.message,
  });
};

// Custom hook delete product
export const useMutationDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<string, AxiosError, string>({
    mutationFn: async (id: string) => await api.deleteData(`${URL.BASE}${URL.PRODUCTS}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
    },
  });
};
