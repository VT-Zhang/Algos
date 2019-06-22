/**
 * @param {number} N
 * @return {number}
 */
function binaryGap(N) {
    let str = parseInt(N).toString(2);
    let last = 0, res = 0;
    for (let i = 0; i < str.length; ++i) {
        if (str[i] === "1") {
            res = Math.max(res, i - last);
            last = i;
        }
    }
    return res;
}

console.log(binaryGap(22));
console.log(binaryGap(5));
console.log(binaryGap(6));
