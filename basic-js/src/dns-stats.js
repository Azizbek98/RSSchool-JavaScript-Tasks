const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counter = {};

  for (let i = 0; i < domains.length; i++) {
    const temp = domains[i].split(".").reverse();
    let str = "";

    for (let j = 0; j < temp.length; j++) {
      str += `.${temp[j]}`;
      counter[str] = (counter[str] || 0) + 1;
    }
  }
  return counter;
}

module.exports = {
  getDNSStats,
};
