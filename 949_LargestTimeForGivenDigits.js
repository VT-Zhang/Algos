/**
 * @param {number[]} A
 * @return {string}
 */
function largestTimeFromDigits(A) {
    let maxTime = -1;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (j !== i) {
                for (let k = 0; k < 4; k++) {
                    if (k !== i && k !== j) {
                        let l = 6 - i - j - k;
                        let res = helper(A[i], A[j], A[k], A[l]);
                        maxTime = Math.max(res, maxTime);
                    }
                }
            }
        }
    }
    if (maxTime === -1) {
        return "";
    }
    return Math.floor(maxTime/60).toString() + ":" + Math.floor(maxTime%60).toString();
}

function helper(a, b, c, d) {
    let hour = a * 10 + b;
    let min = c * 10 + d;
    if (hour < 24 && min < 60) {
        return hour * 60 + min;
    }
    return -1;
}

console.log(largestTimeFromDigits([1,2,3,4]));
console.log(largestTimeFromDigits([5,5,5,5]));
