const removeFromArray = function(arr, ...vals) {
    return newArr = arr.filter(item => !vals.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
