/**
 * @param {string} S
 * @return {number}
 */
function scoreOfParentheses(S) {
    let stack = [0];
    for (let i in S) {
        if (S[i] === "(") {
            stack.push(0);
        } else {
            let last = stack.pop();
            stack[stack.length - 1] += 2 * last || 1;
        }
    }
    return stack.pop();
}

console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()()"));
console.log(scoreOfParentheses("(()(()))"));
