export const random = (array: string[]): string => {
  const random = array[Math.floor(Math.random() * array.length)];

  return random;
};
