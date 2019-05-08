/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
function nthSuperUglyNumber(n, primes) {
    primes.sort((a, b) => a - b);
    let pretty = [], ulgy = [];
    for (let i = 0; i < primes.length; i++) {
        pretty[i] = 0;
    }
    ulgy.push(1);
    for (let i = 1; i < n; i++) {
        let mn = Math.pow(2, 32) - 1;
        for (let j = 0; j < primes.length; j++) {
            mn = Math.min(mn, primes[j] * ulgy[pretty[j]]);
        }
        ulgy[i] = mn;
        for (let j = 0; j < primes.length; j++) {
            if (mn % primes[j] === 0) {
                pretty[j]++;
            }
        }
    }
    return ulgy[n-1];
}

console.log(nthSuperUglyNumber(12, [2,7,13,19]));
