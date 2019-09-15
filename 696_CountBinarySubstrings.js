/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
    if (s.length <= 1) {
        return 0;
    }
    let preRun = 0, curRun = 1, count = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] === s[i]) {
            curRun++;
        } else {
            preRun = curRun;
            curRun = 1;
        }
        if (preRun >= curRun) {
            count++;
        }
    }
    return count;
}

console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("10101"));

