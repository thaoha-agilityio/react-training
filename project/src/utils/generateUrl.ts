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
