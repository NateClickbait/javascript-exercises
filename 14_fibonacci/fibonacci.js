const fibonacci = function(pos) {
    if (pos < 0)
        return "OOPS";
    if (typeof pos === "string")
        pos = +pos;

    let num1 = 0;
    let num2 = 1;
    for (i = 0; i < pos; ++i) {
        let temp = num1;
        num1 = num2;
        num2 += temp;
    }

    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
