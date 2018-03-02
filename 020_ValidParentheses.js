// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid
// but "(]" and "([)]" are not.

function isValid (s) {
    // 1. in pairs
    // 2. in orders
    // 3. open first, close last

    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    console.log(map);
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i]);
        }
        for (var key in map) {
            if (map[key] === s[i]) {
                if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        console.log(stack);
    }
    return stack.length === 0;
}

// console.log(isValid("()[]{}"));
console.log(isValid('([)]}'));
console.log(isValid('()[]{}'));
