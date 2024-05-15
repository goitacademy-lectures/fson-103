export const truncate = (text, lenght) => {
  if (!text) return '';

  if (text.length <= lenght) return text;

  return lenght === 10 ? text.slice(0, lenght) : text.slice(0, lenght) + '...';
};
