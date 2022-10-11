const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let index = 0;

  let s1Array = s1.split("").sort();
  let s2Array = s2.split("").sort();

  s1Array.filter((s1) => {
    index = s2Array.findIndex((s2) => s2 == s1);
    if (index >= 0) {
      counter++;
      s2Array.splice(index, 1);
    }
  });
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
