/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
function shiftingLetters(S, shifts) {
    let temp = shifts.reduce((a, b) => {
        return (a + b) % 26;
    }, 0);
    let res = "";

    for (let i = 0; i < S.length; i++) {
        let code = S[i].charCodeAt() + ((temp % 26) + 26) % 26;
        res += String.fromCharCode((code > 122 ? code - 26: code));
        temp -= shifts[i];
    }
    return res;
}

console.log(shiftingLetters("abc", [3,5,9]));
