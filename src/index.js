exports.min = function min(array) {
    if (array === undefined) {
        return 0;
    } else {
        let len = array.length;
        if (len === 0 || array === undefined) {
            return 0;
        } else {
            let min = Infinity;
            while (len--) {
                if (array[len] < min) {
                    min = array[len]
                }
            }
            return min;
        }
    }


}

exports.max = function max(array) {
    if (array === undefined) {
        return 0;
    } else {
        let len = array.length;
        if (len === 0) {
            return 0;
        } else {
            let max = -Infinity;
            while (len--) {
                if (array[len] > max) {
                    max = array[len]
                }
            }
            return max;
        }
    }
}

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    } else {
        let len = array.length;
        if (len === 0) {
            return 0;
        } else {
            let avg = 0;
            let sum = array.reduce(function (a, b) {
                return a + b;

            }, 0);



            avg = sum / len;

            return avg;
        }

    }

}
