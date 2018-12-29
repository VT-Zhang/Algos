/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function smallestRangeI(A, K) {
    let max = findMax(A);
    let min = findMin(A);
    return Math.max(0, max - min - 2 * K);
}

function findMax(array) {
    let max = Number.NEGATIVE_INFINITY;
    array.forEach(function(element) {
        if (element > max) {
            max = element;
        }
    });
    return max;
}

function findMin(array) {
    let min = Number.POSITIVE_INFINITY;
    array.forEach(function(element) {
        if (element < min) {
            min = element;
        }
    });
    return min;
}

console.log(smallestRangeI([0,10], 2));
