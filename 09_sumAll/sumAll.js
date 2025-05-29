const sumAll = function(num1, num2) {
    if (typeof(num1) !== "number" || typeof(num2) !== "number" ||
        Math.floor(num1) !== num1 || Math.floor(num2) != num2 ||
        num1 < 0 || num2 < 0)
        return "ERROR";

    total = 0;
    finish = (num1 > num2) ? num1 : num2;
    start = (num1 < num2) ? num1 : num2;
    for (i = start; i <= finish; ++i) {
        total += i;
    }
    return total;
    //a comment
};

// Do not edit below this line
module.exports = sumAll;
