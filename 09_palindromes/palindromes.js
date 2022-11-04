const palindromes = function (text) {

    const textWSR = text.toLowerCase().replace(/[^a-z]/g, "");

    const textArr = textWSR.split('');

    const textArrRev = textArr.reverse();

    const textRev = textArrRev.join('');

    if (textRev === textWSR) {
        return true;
    }
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
