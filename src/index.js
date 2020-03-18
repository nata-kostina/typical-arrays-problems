
exports.min = function min(array) {
    if (array && array.length > 0) {
        let min = array[0];
        for (el of array) {
            if (min > el)
                min = el;
        }
        return min;
    }
    else
        return 0;
}

exports.max = function max(array) {
    if (array && array.length > 0) {
        let max = array[0];
        for (el of array) {
            if (max < el)
                max = el;
        }
        return max;
    }
    else
        return 0;
}

exports.avg = function avg(array) {
    if (array && array.length > 0) {
        let sum = 0;
        for (el of array) {
            sum += el;
        }
        return sum / array.length;
    }
    else
        return 0;
}
