/**
 * Generates a URL with query parameters based on given query keys and parameter name.
 * @param queryKeys An array of numbers representing query values.
 * @param paramName A string representing the parameter name.
 * @returns The generated URL.
 */
export const generateUrl = (queryValues: number[], paramName: string) =>
  queryValues.map((value) => `${paramName}=${value}`).join('&');
