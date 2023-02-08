import useSWRImmutable from "swr/immutable";

// API call
import { api } from "../services/APIRequest";

export const useFetching = <T>(url: string) => {
  const fetcher = async () => (await api.getData<T>(url)).data;
  const { data, error } = useSWRImmutable<T>(url, fetcher);

  return {
    data,
    error,
  };
};
