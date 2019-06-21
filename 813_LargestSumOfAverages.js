/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function largestSumOfAverages(A, K) {
    let N = A.length;
    let memo = Array(N+1).fill(0)
    let cur = 0;
    for (let i = 0; i < N; i++) {
        cur += A[i];
        memo[i+1][1] = cur / (i + 1);
    }
    return search(N, K, A, memo);

    function search (n, k, A, memo) {
        if (memo[n][k] > 0) {
            return memo[n][k];
        }
        if (n < k) {
            return 0;
        }
        let cur = 0;
        for (let i = n - 1; i > 0; i--) {
            cur += A[i];
            memo[n][k] = Math.max(memo[n][k], search(i, k-1, A, memo) + cur / (n - 1));
        }
        return memo[n][k];
    }
}

console.log(largestSumOfAverages([9,1,2,3,9], 3));
