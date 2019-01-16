/**
 * @param {string} S
 * @return {number[]}
 */
function diStringMatch(S) {
    let res = [];
    let i = 0;
    let min = 0;
    let max = S.length;
    while (res.length <= S.length) {
        if (S[i] === "I") {
            res.push(min);
            min++;
        } else if (S[i] === "D") {
            res.push(max);
            max--;
        } else {
            res.push(min);
        }
        i++;
    }
    return res;
}

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
