export const createID = (): string => {
  const id = new Date().getTime().toString();

  return id;
};
