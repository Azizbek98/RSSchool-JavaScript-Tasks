const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split("");
  // let letters = {};
  // let resultStr = "";

  // str.forEach((elem) => (letters[elem] = (letters[elem] || 0) + 1));

  // for (let i in letters) {
  //   resultStr += `${letters[i]}${i}`;
  // }

  // return resultStr;

  let resultStr = "",
    counter = 1;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (str[i] === str[i + 1]) {
      counter += 1;
    } else {
      if (counter == 1) {
        resultStr += `${letter}`;
      } else {
        resultStr += `${counter}${letter}`;
      }
      counter = 1;
    }
  }

  return resultStr;
}

module.exports = {
  encodeLine,
};
