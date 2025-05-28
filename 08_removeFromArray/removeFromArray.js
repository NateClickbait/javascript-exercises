const removeFromArray = function(arr, ...args) {
    for (const removeNum of args) {
        for (i = 0; i < arr.length; ++i) {
            if (arr[i] === removeNum) {
                arr.splice(i,1);
                --i;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
