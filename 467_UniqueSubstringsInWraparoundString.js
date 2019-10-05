/**
 * @param {string} p
 * @return {number}
 */
function findSubstringInWraproundString(p) {
    if (p.length === 0) {
        return 0;
    }
    let dp = new Array(26).fill(0);
    dp[p[0].charCodeAt() - 97] = 1;
    let currentMax = 1;
    for (let i = 1; i < p.length; i++) {
        let preCharIndex = p[i-1].charCodeAt() - 97;
        let charIndex = p[i].charCodeAt() - 97;
        if (charIndex - preCharIndex === 1 ||
            charIndex - preCharIndex === -25) {
            currentMax++;
        } else {
            currentMax = 1;
        }
        dp[charIndex] = Math.max(dp[charIndex], currentMax)
    }
    return dp.reduce((acc, val) => acc + val);
}

console.log(findSubstringInWraproundString("a"));
console.log(findSubstringInWraproundString("cac"));
console.log(findSubstringInWraproundString("zab"));
