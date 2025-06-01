const palindromes = function (string) {
    let startPos = 0;
    let endPos = string.length - 1;

    string = string.toLowerCase();

    //learn regex
    while (startPos < endPos) {
        if (!(/^[a-zA-Z0-9]$/.test(string[startPos])))
            ++startPos;
        else if (!(/^[a-zA-Z0-9]$/.test(string[endPos])))
            --endPos;
        else if (string[startPos] !== string[endPos])
            return false;
        else {
            ++startPos;
            --endPos;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
