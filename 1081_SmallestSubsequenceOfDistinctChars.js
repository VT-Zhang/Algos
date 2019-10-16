/**
 * @param {string} text
 * @return {string}
 */
function smallestSubsequence(text) {
    let stack = [];
    let map = new Map();
    text.split('').map(item => {
        let t = (map.get(item)) || 0;
        map.set(item, t + 1);
    });
    let ignore = new Map();
    for (let char of text) {
        let t = map.get(char);
        map.set(char, t - 1);
        if (ignore.has(char)) {
            continue;
        }
        while (stack.length > 0 && stack[stack.length - 1] > char &&
            (map.get(stack[stack.length - 1])) > 0) {
            ignore.delete(stack[stack.length - 1]);
            stack.pop();
        }
        stack.push(char);
        ignore.set(char, true)
    }
    return stack.join('');
}

console.log(smallestSubsequence("cdadabcc"));
console.log(smallestSubsequence("abcd"));
console.log(smallestSubsequence("ecbacba"));
console.log(smallestSubsequence("leetcode"));
