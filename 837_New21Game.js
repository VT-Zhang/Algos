/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
function new21Game(N, K, W) {
    if (K === 0 || N >= K + W) {
        return 1;
    }
    let sum = 1, res = 0;
    let dp = [];
    dp[0] = 1;
    for (let i = 1; i <= N; i++) {
        dp[i] = sum / W;
        if (i < K) {
            sum += dp[i];
        } else {
            res += dp[i];
        }
        if (i - W >= 0) {
            sum -= dp[i - W];
        }
    }
    return res;
}

console.log(new21Game(10, 1, 10));
console.log(new21Game(6, 1, 10));
console.log(new21Game(21, 17, 10));
