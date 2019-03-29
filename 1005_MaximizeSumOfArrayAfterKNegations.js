/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function largestSumAfterKNegations(A, K) {
    for (let i = 0; i < K; i++) {
        let minIndex = A.indexOf(Math.min(...A));
        A[minIndex] = -A[minIndex];
    }

    return A.reduce((a, b) => a + b);
}

console.log(largestSumAfterKNegations([4,2,3], 1));
console.log(largestSumAfterKNegations([3,-1,0,2], 3));
console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2));
