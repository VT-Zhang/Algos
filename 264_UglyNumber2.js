
/**
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
    let cache = [1];
    let p2 = 0, p3 = 0, p5 = 0;
    let m, r2, r3, r5;
    for (let i = cache.length ; i < n; i++) {
        r2 = cache[p2] * 2;
        r3 = cache[p3] * 3;
        r5 = cache[p5] * 5;
        m = Math.min(r2, r3, r5);
        if (m === r2) {
            p2++;
        }
        if (m === r3) {
            p3++;
        }
        if (m === r5) {
            p5++;
        }
        cache[i] = m;
    }
    return cache[n-1];
}

console.log(nthUglyNumber(10));
