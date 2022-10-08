const repeatString = function (x, y) {


    if (y < 0) {
        return 'ERROR'
    }
    else {
        const stringR = x.repeat(y);
        return stringR;
    }
};

// Do not edit below this line
module.exports = repeatString;
