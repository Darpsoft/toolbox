export const delay = (time = 2000): Promise<void> => new Promise((resolve) => setTimeout(resolve, time));
export const getUrlImage = (url: string): string => {
  return `${url.replace("http://", "https://")}?random=${Math.random()}`;
};
