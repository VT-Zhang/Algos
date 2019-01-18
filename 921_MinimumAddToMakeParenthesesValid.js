/**
 * @param {string} S
 * @return {number}
 */
function minAddToMakeValid(S) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(S[i]);
        } else {
            if (stack.length !== 0) {
                stack.pop();
            } else {
                count++
            }
        }
    }
    return count + stack.length;
}

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("()))(("));
