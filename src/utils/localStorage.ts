export const writeLocalStorage = <T>(data: T, key: string) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const readLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data;
};
