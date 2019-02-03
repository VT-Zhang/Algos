/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
    let stack = [];
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        while (stack.length && stack[stack.length-1] === popped[0]) {
            stack.pop();
            popped.shift();
        }
    }
    return stack.length === 0;
}

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]));
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]));
