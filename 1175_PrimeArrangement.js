/**
 * @param {number} n
 * @return {number}
 */
const M = 10 ** 9 + 7;

function numPrimeArrangements(n) {
    const nPrimes = findNumberOfPrimes(n);
    const memo = {};
    return (factorial(nPrimes, memo) * factorial(n - nPrimes, memo)) % M;
}

function factorial(n, memo) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return 1;
    }
    memo[n] = (n * factorial(n - 1, memo)) % M;
    return memo[n];
}

function findNumberOfPrimes(n) {
    let nPrimes = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            nPrimes += 1;
        }
    }
    return nPrimes;
}

function isPrime(n) {
    const max = Math.floor(Math.sqrt(n)) + 1;
    for (let i = 2; i < max; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(numPrimeArrangements(5));
console.log(numPrimeArrangements(100));
