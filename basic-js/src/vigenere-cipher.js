const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(string, keyWord) {
    if (typeof string === "undefined" || typeof keyWord === "undefined")
      throw new Error("Incorrect arguments!");

    let str = string.toUpperCase();
    let key = keyWord.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (!/[A-Z]/.test(str[i])) {
        result += str[i];
        j--;
      } else {
        if (!keyWord[j]) j = 0;
        let n = str.codePointAt(i) + key.codePointAt(j) - 65;
        if (n > 90) n = n - 26;
        result += String.fromCodePoint(n);
      }
    }
    if (this.modification) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }

  decrypt(str, keyWord) {
    if (typeof str === "undefined" || typeof keyWord === "undefined")
      throw new Error("Incorrect arguments!");

    let key = keyWord.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (!/[A-Z]/.test(str[i])) {
        result += str[i];
        j--;
      } else {
        if (!keyWord[j]) j = 0;
        let n;
        n = str.codePointAt(i) - key.codePointAt(j) + 65;
        if (n < 65) n = n + 26;
        result += String.fromCodePoint(n);
      }
    }
    if (this.modification) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
