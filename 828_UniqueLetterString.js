/**
 * @param {string} S
 * @return {number}
 */
function uniqueLetterString(S) {
    let contribute = new Array(26).fill(0);
    let lastPos = new Array(26).fill(0);
    let res = 0, cur = 0;
    for (let i = 0; i < S.length; i++) {
        let index = S[i].charCodeAt(0) - 65;
        cur = cur - contribute[index];
        contribute[index] = i - (lastPos[index] - 1);
        cur = cur + contribute[index];
        lastPos[index] = i + 1;
        res = res + cur;
    }
    return res;
}

console.log(uniqueLetterString("ABC"));
console.log(uniqueLetterString("ABA"));
