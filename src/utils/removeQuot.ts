export const removeQuot = (str: string) => {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, '"')
    .replace(/&r;/g, '"')
    .replace(/&/g, '"')
    .replace(/;/g, '"');
};
