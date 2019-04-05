/**
 * @param {string} S
 * @return {boolean}
 */
function isValid(S) {
    if (S.length < 3) {
        return false;
    }
    while (S.includes('abc')) {
        S = S.replace(/abc/g, '');
    }
    return S.length === 0;
}

console.log(isValid("aabcbc"));
console.log(isValid("abcabcababcc"));
console.log(isValid("abccba"));
console.log(isValid("cababc"));
console.log(isValid("aabbcc"));
