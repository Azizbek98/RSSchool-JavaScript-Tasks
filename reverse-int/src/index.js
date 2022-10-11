module.exports = function reverse(n) {
    // str = String(Math.abs(n)).split('').reverse().join('')
    // return str;

    return Math.abs(n).toString().split("").reverse().join("");
};
