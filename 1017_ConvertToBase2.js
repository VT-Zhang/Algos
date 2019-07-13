/**
 * @param {number} N
 * @return {string}
 */
function baseNeg2(N) {
    if (!N) return "0";
    let result = "";
    while (N !== 0) {
        let remainder = N % -2;
        N = ~~(N / -2);
        if (remainder < 0) {
            remainder += 2;
            N += 1;
        }
        result = remainder + result;
    }
    return result;
}

console.log(baseNeg2(3));
console.log(baseNeg2(2));
