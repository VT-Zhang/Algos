/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kInversePairs(n, k) {
    const MOD = 1000000007;
    if (k > n * (n - 1) / 2 || k < 0) {
        return 0;
    }
    if (k === 0 || k === n * (n - 1) / 2) {
        return 1;
    }
    let arr = new Array(k + 1).fill(0);
    let dp = new Array(n + 1).fill(arr);
    dp[2][0] = 1;
    dp[2][1] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i][0] = 1;
        for (let j = 1; j < Math.min(k, i * (i - 1) / 2); j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j];
            if (j >= i) {
                dp[i][j] -= dp[i-1][j-i];
            }
            dp[i][j] = (dp[i][j] + MOD) % MOD;
        }
    }
    return dp[n][k];
}

console.log(kInversePairs(3, 0));
console.log(kInversePairs(3, 1));
