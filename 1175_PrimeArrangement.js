/**
 * @param {number} n
 * @return {number}
 */
const M = 10 ** 9 + 7;

function numPrimeArrangements(n) {
    let count = 0;
    const MOD = BigInt(1e9 + 7);
    const factorials = [1n];
    for (let i = 1; i < n; i++) {
        factorials[i] = BigInt(factorials[i - 1] * BigInt(i) % MOD);
    }
    for (let i = 2; i <= n; i++) {
        count += isPrime(i);
    }
    return factorials[count] * factorials[n - count] % MOD;

    function isPrime(m) {
        for (let i = 2; i * i <= m; i++) {
            if (m % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(numPrimeArrangements(5));
console.log(numPrimeArrangements(100));
