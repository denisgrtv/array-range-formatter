/**
 * Formats array as string by range.
 *
 * @param {Array<number>} arr - Sorted array of positive numbers.
 * @returns {Promise<string>}
 */
const format = (arr = []) => new Promise((resolve) => {
  const arrCopy = [...arr];
  if (arrCopy.length === 0) return resolve('');
  if (arrCopy.length === 1) return resolve(`${arrCopy[0]}`);
  if (arrCopy.length === 2) return resolve(`${arrCopy.shift()},${arrCopy.pop()}`);

  return setTimeout(async () => {
    const breakIndex = arrCopy.findIndex((value, index) => {
      const previousValue = arrCopy[index - 1] || value;
      return ((value - previousValue) > 1);
    });

    if (breakIndex < 0) {
      return resolve(`${arrCopy.shift()}-${arrCopy.pop()}`);
    }

    return resolve(
      `${await format(arrCopy.slice(0, breakIndex))},${await format(arrCopy.slice(breakIndex))}`,
    );
  }, 0);
});

module.exports = {
  format,
};
