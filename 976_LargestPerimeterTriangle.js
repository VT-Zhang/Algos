/**
 * @param {number[]} A
 * @return {number}
 */
function largestPerimeter(A) {
    A.sort((a, b) => {
        return b - a;
    });
    for (let i = 0; i < A.length - 2; i++) {
        let sum = A[i+1] + A[i+2];
        if (sum > A[i]) {
            return sum + A[i];
        }
    }
    return 0;
}

console.log(largestPerimeter([3,2,3,4]));
console.log(largestPerimeter([3,6,2,3]));
