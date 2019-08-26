/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
function bagOfTokensScore(tokens, P) {
    tokens.sort((a, b) => a - b);
    let res = 0, points = 0, i = 0, j = tokens.length - 1;
    while (i <= j) {
        if (P >= tokens[i]) {
            P -= tokens[i++];
            res = Math.max(res, ++points);
        } else if (points > 0) {
            points--;
            P += tokens[j--];
        } else {
            break;
        }
    }
    return res;
}

console.log(bagOfTokensScore([100], 50));
console.log(bagOfTokensScore([100, 200], 150));
console.log(bagOfTokensScore([100,200,300,400], 200));
