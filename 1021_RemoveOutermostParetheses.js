/**
 * @param {string} S
 * @return {string}
 */
function removeOuterParentheses(S) {
    let res = [];
    let opened = 0;
    let closed = 0;
    let openIndex;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            if (opened === 0) {
                openIndex = i + 1;
            }
            opened++;
        } else {
            closed++;
        }
        if (opened === closed) {
            opened = 0;
            closed = 0;
            res.push(S.substring(openIndex, i));
        }
    }
    return res.join('');
}

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
