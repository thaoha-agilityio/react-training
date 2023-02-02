import useSWRImmutable from "swr/immutable";
import { Key } from "swr";

// API call
import { getData } from "../services/APIRequest";

export const useFetching = <T>(key: Key, url: string) => {
  const fetcher = () => getData<T>(url);
  const { data, error } = useSWRImmutable<T>(key, fetcher);

  return {
    data,
    error,
  };
};
