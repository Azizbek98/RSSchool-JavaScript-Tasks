const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringNumber = String(n).split("").map(Number);

  return Math.max(
    ...stringNumber.map((element, key) => {
      let random = stringNumber.slice();
      random.splice(key, 1);

      return Number(random.join(""));
    })
  );
}

module.exports = {
  deleteDigit,
};
