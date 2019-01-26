/**
 * @param {number[]} A
 * @return {boolean}
 */
function isMonotonic(A) {
    let isIncreasing = false;
    let isDecreasing = false;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i-1]) {
            isIncreasing = true;
        } else if (A[i] < A[i-1]) {
            isDecreasing = true;
        }
    }
    return !(isIncreasing && isDecreasing);
}


console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));
