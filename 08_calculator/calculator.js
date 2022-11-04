const add = function (a, b) {
  const additiion = a + b;
  return additiion;
};

const subtract = function (a, b) {
  const sub = a - b;
  return sub;
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function (a, b) {
  let exp = a ** b;
  return exp;
};

const factorial = function (n) {

  let ans = 1;
  for (let i = n; i > 0; i--) {
    ans *= i;
  }
  return ans;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
