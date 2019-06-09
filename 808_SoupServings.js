/**
 * @param {number} N
 * @return {number}
 */
function soupServings(N) {
    let n = Math.floor((N + 24) / 25);
    let cache = [];
    return n >= 223 ? 1 : helper(n, n);

    function helper(a, b) {
        if (a <= 0 && b > 0) return 1;
        if (a <= 0 && b <= 0) return 0.5;
        if (b <= 0 ) return 0;
        if (!cache[a]) cache[a] = [];
        if (cache[a][b] === undefined) {
            cache[a][b] = (helper(a - 4, b) + helper(a - 3, b - 1)
                + helper(a - 2, b - 2) + helper(a - 1, b - 3)) / 4;
        }
        return cache[a][b];
    }
}

console.log(soupServings(50));
