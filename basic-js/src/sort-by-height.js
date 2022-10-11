const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = arr.filter((elem) => elem !== -1);
  arr2 = arr2.sort((a, b) => a - b);

  for (let elem of arr) {
    if (elem === -1) {
      arr2.splice(arr.indexOf(elem), 0, elem);
      arr[arr.indexOf(elem)] = "";
    }
  }
  return arr2;
}

module.exports = {
  sortByHeight,
};
