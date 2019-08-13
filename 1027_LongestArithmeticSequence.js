/**
 * @param {number[]} A
 * @return {number}
 */
function longestArithSeqLength(A) {
    let dp = Array(A.length);
    let max = 2;
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Map();
    }
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < i; j++) {
            let diff = A[i] - A[j];
            dp[i].set(diff, dp[j].get(diff) + 1 || 2);
            max = Math.max(max, dp[i].get(diff));
        }
    }
    return max;
}

console.log(longestArithSeqLength([3,6,9,12]));
console.log(longestArithSeqLength([9,4,7,2,10]));
console.log(longestArithSeqLength([20,1,15,3,10,5,8]));
