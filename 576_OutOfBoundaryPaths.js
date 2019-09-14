/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
function findPaths(m, n, N, i, j) {
    let memo = new Map();
    let key = N + ',' + i + ',' + j;
    const isOutside = i === -1 || i === m || j === -1 || j === n;
    if (N === 0 || isOutside) return +isOutside;
    memo.set(key, (
        findPaths(m, n, N - 1, i - 1, j, memo)
        + findPaths(m, n, N - 1, i + 1, j, memo)
        + findPaths(m, n, N - 1, i, j + 1, memo)
        + findPaths(m, n, N - 1, i, j - 1, memo)
    ) % 1000000007);
    return memo.get(key);

}

console.log(findPaths(1, 3, 3, 0, 1));
