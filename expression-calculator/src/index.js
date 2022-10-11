function eval() {
    // Do not use eval!!!
    return;
}

const o = {
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
    "*" : (a, b) => a * b,
    "/" : (a, b) => a / b
}

function calculate(expr) {
    let e = expr.split(" ");

    function calc(o1, o2){
        for (let i = 1; i < e.length - 1; i++) {
            if (e[i] == o1 || e[i] == o2) {
                e[i] = o[ e[i] ]( +e[i-1], +e[i+1] );
                e.splice(i-1, 3, e[i]);
                i--;
            }
        }
    }
    calc("*", "/");
    calc("+", "-");

    return +e[0];
}

function checkForErrors(expr){
    let checker = expr.split(" ").filter(e => e != "").join("");

    // "(" and ")" quantities are equal
    if ( checker.replace(/[^(]/g, "").length != checker.replace(/[^)]/g, "").length ) {
      throw new Error("ExpressionError: Brackets must be paired");
    }

    // if divide by zero
    if ( checker.includes("/0") ) {
        throw new Error("TypeError: Division by zero.");
    }
}

function expressionCalculator(expr) {
    checkForErrors(expr);

    expr = expr.replace(/\s/g, "").replace(/(\*|\/|\+|\-)/g, " $& ");

    if (expr.match(/\(/g) != null ) {
        for (let i = expr.match(/\(/g).length; i != 0; i--) {
            let calculation = expr.match(/(\([0-9\+\/\*\-. ]+\))/g)[0];
            let expression = calculation.slice( 1, calculation.length-1 );
            expr = expr.replace(calculation, calculate(expression));
        }
    }
  
    return calculate(expr);
}

module.exports = {
    expressionCalculator
}