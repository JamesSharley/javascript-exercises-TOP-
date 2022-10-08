const reverseString = function (x) {
    let split = x.split("");
    let revSplit = split.reverse();
    let revSplitJoin = revSplit.join("");

    return revSplitJoin;
};

// Do not edit below this line
module.exports = reverseString;
