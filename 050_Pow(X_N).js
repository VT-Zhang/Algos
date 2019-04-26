/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    if (n ===  0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    if (x === 0) {
        return 0;
    }

    if (n > 0) {
        if (n % 2 === 0) {
            let half = myPow(x, n / 2);
            return half * half;
        } else {
            return x * myPow(x, n - 1);
        }
    } else {
        return myPow(1 / x, -n);
    }
}

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));

