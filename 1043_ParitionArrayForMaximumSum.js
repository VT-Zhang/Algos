/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function maxSumAfterPartitioning(A, K) {
    let len = A.length;
    let dp = new Array(len + 1).fill(0);
    for (let i = 1; i < len + 1; i++) {
        let max = Number.MIN_VALUE;
        for (let j = 1; j < Math.min(i, K) + 1; j++) {
            max = Math.max(max, A[i - j]);
            dp[i] = Math.max(dp[i], dp[i - j] + max * j);
        }
    }
    return dp[len];
}

console.log(maxSumAfterPartitioning([1,15,7,9,2,5,10], 3));
