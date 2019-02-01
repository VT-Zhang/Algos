/**
 * @param {number[][]} A
 * @return {number}
 */
function minFallingPathSum(A) {
    for(let i = 1; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            let left = Math.max(0, j - 1);
            let right = Math.min(A.length - 1, j + 1);
            A[i][j] += Math.min(A[i-1][left], A[i-1][j], A[i-1][right]);
        }
    }
    return Math.min(...A[A.length-1]);
}
