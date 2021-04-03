export const dateStringToDate = (date: string): Date => {
  const [day, month, year] = date
    .split('/')
    .map((val: string) => parseInt(val));

  return new Date(year, month - 1, day);
};
