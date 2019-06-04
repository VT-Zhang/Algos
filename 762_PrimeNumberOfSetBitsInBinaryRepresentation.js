/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function countPrimeSetBits(L, R) {
    let res = 0;

    for (let i = L; i <= R; i++) {
        let bits = i.toString(2).split('').filter(x => x !== '0');
        if (isPrime(bits.length)) {
            res++;
        }
    }

    return res;

    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
}

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
