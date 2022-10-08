const ctof = function (xf) {
  let xc = (xf * 9 / 5) + 32;
  let xcAns = (+xc.toFixed(1));
  return xcAns;
};

const ftoc = function (yc) {
  let yf = (yc - 32) * 5 / 9;
  let yfAns = (+yf.toFixed(1));
  return yfAns;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


// ctof = ((x * 9/5) + 32) F
// ftoc = ((x - 32) * 5/9) C