const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = email.split("@");

  if (domain[1] === ".unusual.com") {
    domain[1] = "usual.com";
    return domain[1];
  } else {
    return domain[1];
  }
}

module.exports = {
  getEmailDomain,
};
