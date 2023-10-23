import { KeyboardEventHandler } from 'react';

/**
 * Converts a File object to a Base64 encoded string.
 * @param {File} file - The File object to be converted.
 * @returns {Promise<string | null>} A Promise that resolves with the Base64 encoded string,or null if there was an error.
 */
export const convertBase64 = (file: File): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      const result = fileReader.result;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error('Unsupported result type'));
      }
    };
    fileReader.onerror = (error) => reject(error);
  });
};

// formats this number using fixed-point notation.
export const formatPrice = (price: number) => price.toFixed(2);

export const createId = (): string => {
  return new Date().getTime().toString();
};

// Flattens an array of arrays into a single array
export const flattenArray = <T>(pages: T[][]): T[] => {
  const result: T[] = [];
  pages.forEach((page) => {
    result.push(...page);
  });

  return result;
};

// This is a KeyboardEventHandler function that prevents negative values in an input element.
export const preventNegativeValues: KeyboardEventHandler<HTMLInputElement> = (e) => {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault();
    return false;
  }

  return true;
};
