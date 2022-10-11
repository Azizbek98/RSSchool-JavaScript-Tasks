exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    // if (array.length > 0) {
    //   return Math.min(...array); // Using ... destructor of array
    // } else {
    //   return 0;
    // }

    return array.length > 0 ? Math.min(...array) : 0;
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    // if (array.length > 0) {
    //     return Math.max(...array); // Using ... destructor of array
    // } else {
    //     return 0;
    // }

    return array.length > 0 ? Math.max(...array) : 0;
};

exports.avg = function avg(array, sum = 0) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    // for (let i = 0; i < array.length; i++) {
    //     sum += parseInt(array[i], 10); // First version
    //     sum += Number(array[i]); // Second Version
    //     sum += +array[i]; // Third Version
    // }

    array.forEach((item) => (sum += +item));

    return sum / array.length;
};
