import { decryptAccessToken, encryptAccessToken } from '@/utils';

export const getItemLocalStorage = (key: string) => {
  const localStorageData = localStorage.getItem(key);

  return localStorageData ? decryptAccessToken(JSON.parse(localStorageData)) : null;
};

export const setItemLocalStorage = <T>(key: string, data: T) =>
  localStorage.setItem(key, encryptAccessToken(JSON.stringify(data)));
