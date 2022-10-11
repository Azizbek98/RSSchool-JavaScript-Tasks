const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (arr[i + 1] !== undefined) {
          arr.splice(i + 1, 1);
        }
        break;
      case "--discard-prev":
        if (arr[i - 1] !== undefined) {
          result.pop();
        }
        break;
      case "--double-next":
        if (arr[i + 1] !== undefined) {
          result.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (arr[i - 1] !== undefined) {
          result.push(result[result.length - 1]);
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
