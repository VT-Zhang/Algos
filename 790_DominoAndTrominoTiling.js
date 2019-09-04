/**
 * @param {number} N
 * @return {number}
 */
function numTilings(N) {
    let mod = 1e9 + 7;
    let dp = Array.from({length: N + 1}, x => [0, 0]);
    dp[1][0] = 1;
    dp[1][1] = 0;
    if (N > 1) {
        dp[2][0] = dp[2][1] = 2;
    }
    for (let i = 3; i <= N; i++) {
        dp[i][0] = (dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][0]) % mod;
        dp[i][1] = (dp[i - 2][0] * 2 + dp[i - 1][1]) % mod;
    }
    return dp[N][0];
}

console.log(numTilings(3));
