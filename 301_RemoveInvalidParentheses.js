/**
 * @param {string} s
 * @return {string[]}
 */
function removeInvalidParentheses(s) {
    let queue = new Set([s]);
    while (queue.size) {
        let next = new Set();
        for (let str of queue) {
            if (isValid(str)) {
                return [...queue].filter(isValid);
            }
            for (let i = 0; i < str.length; i++) {
                next.add(str.slice(0, i) + str.slice(i + 1));
            }
        }
        queue = next;
    }
    return [''];
}

function isValid(str) {
    let count = 0;
    for (let char of str) {
        if (char === "(") {
            count++;
        } else if (char === ")") {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}

console.log(removeInvalidParentheses("()())()"));
console.log(removeInvalidParentheses("(a)())()"));
console.log(removeInvalidParentheses(")("));
