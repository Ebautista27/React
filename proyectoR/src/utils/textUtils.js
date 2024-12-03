
export const normalizeText = (text) => {
  const from = 'ÁÉÍÓÚáéíóúÑñ';
  const to = 'AEIOUaeiounn';
  const mapping = {};

  from.split('').forEach((char, index) => {
    mapping[char] = to[index];
  });

  return text
    .split('')
    .map((char) => mapping[char] || char)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '');
};
