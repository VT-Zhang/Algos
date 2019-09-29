/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
    let stack = [];
    if (k >= num.length) {
        return "0";
    }
    for (let item of num) {
        if (stack.length <= 0 || k <= 0) {
            stack.push(item);
        } else {
            while (stack[stack.length - 1] > item && k > 0) {
                stack.pop();
                k--;
            }
            stack.push(item);
        }
    }
    while (stack.length > 0 && stack[0] === "0") {
        stack.shift();
    }
    while (k--) {
        stack.pop();
    }
    if (stack.length <= 0) {
        return "0";
    }
    return stack.join("");
}

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
