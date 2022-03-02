export const delay = (time = 2000): Promise<void> => new Promise((resolve) => setTimeout(resolve, time));
