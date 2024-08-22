// Constants
import { SEARCH_PARAMS } from "@/constants";

// Types
import { FilterParam } from "@/types";

/**
 * Function to generate a URL query string from a filter object.
 * @param filterParam The filterParam object containing key-value pairs.
 * @returns The URL query string or empty string.
 */
export const generateUrl = (filterParam?: FilterParam): string =>
  filterParam
    ? `?${Object.entries(filterParam)
        .map(([key, value]) => `_${key}=${value}`)
        .join("&")}`
    : "";

/**
 * Generates a URL with the updated page number in the search parameters.
 * @param pageNumber - The page number to set in the URL. Can be a number or string.
 * @param searchParams - The current URL search parameters.
 * @param locationPathname - The current pathname of the location.
 * @returns The generated URL string with the updated page number.
 */
export const createPageURL = (
  pageNumber: number | string,
  searchParams: URLSearchParams,
): string => {
  const params = new URLSearchParams(searchParams);
  params.set(SEARCH_PARAMS.PAGE, pageNumber.toString());

  return `${location.pathname}?${params.toString()}`;
};
