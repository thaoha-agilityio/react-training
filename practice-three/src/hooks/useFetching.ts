import useSWRImmutable from "swr/immutable";

// API call
import { api } from "../services/APIRequest";

export const useFetching = <T>(
  url: string
): {
  data: T;
  error: string;
  isLoading: boolean;
} => {
  const fetcher = async () => (await api.getData<T>(url)).data;

  const { data, error, isLoading } = useSWRImmutable<T>(url, fetcher);

  return {
    data: data as T,
    error,
    isLoading,
  };
};
