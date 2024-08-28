import { TIME } from "@/constants";

/**
 * Handle trigger call a function after a number of milliseconds.
 *
 * @param callback action need to be perform after a debounce time
 * @param debounceTime milliseconds - an specific waiting time until action perform.
 *
 * Return an object with a clearTimeout method that can be used to cancel the setTimeout if necessary
 */
export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T,
  debounceTime = TIME.DEBOUNCE_DEFAULT,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => callback(...args), debounceTime);
  };
};
