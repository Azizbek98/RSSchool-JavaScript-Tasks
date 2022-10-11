const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainsArray: [],
  getLength() {
    return this.chainsArray.length;
  },
  addLink(value) {
    this.chainsArray.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position <= this.chainsArray.length
    ) {
      this.chainsArray.splice(position - 1, 1);
      return this;
    } else {
      this.chainsArray = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chainsArray = this.chainsArray.reverse();
    return this;
  },
  finishChain() {
    let chain = "";
    for (let i = 0; i < this.chainsArray.length; i++) {
      chain += `~~( ${this.chainsArray[i]} )`;
    }
    this.chainsArray = [];
    return chain.substring(2);
  },
};

module.exports = {
  chainMaker,
};
