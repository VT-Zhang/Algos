/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
    let i = Math.floor(Math.sqrt(c));
    for (i; i >= 0; i--) {
        if (Number.isInteger((Math.sqrt(c - i * i)))) {
            return true;
        }
    }
    return false;
}

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
