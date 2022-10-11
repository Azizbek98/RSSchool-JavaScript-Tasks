module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) 
      return [];

  return matrix.map((array, index) => index % 2 === 0 ? array : array.reverse()).flat();
}