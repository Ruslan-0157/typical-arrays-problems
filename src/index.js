exports.min = function min(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    let minimal = 0;
    array.map((nextNumber, index, array) => {
        minimal = index === 0 ? nextNumber : minimal;
        if (index < array.length && minimal > nextNumber) {
            minimal = nextNumber;
        }
    });
    return minimal;
};

exports.max = function max(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    let maximal = 0;
    array.map((nextNumber, index, array) => {
        maximal = index === 0 ? nextNumber : maximal;
        if (index < array.length && maximal < nextNumber) {
            maximal = nextNumber;
        }
    });
    return maximal;
};

exports.avg = function avg(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    const length = array.length;
    let sum = 0;
    array.map((nextNumber) => {
        sum += nextNumber;
    });
    const avg = sum / length;
    return avg;
};