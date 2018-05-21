//
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
//     For example, given n = 3, a solution set is:
//
//     [
//         "((()))",
//         "(()())",
//         "(())()",
//         "()(())",
//         "()()()"
//     ]


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    backtrack(res, 2 * n);
    return res;
};

function backtrack(res, len, curr = [], presum = 0) {
    if (curr.length === len) {
        res.push(curr.join(''));
        return;
    }
    if (presum < len - curr.length) {
        curr.push('(');
        backtrack(res, len, curr, presum + 1);
        curr.pop();
    }
    if (presum > 0) {
        curr.push(')');
        backtrack(res, len, curr, presum - 1);
        curr.pop();
    }
}

console.log(generateParenthesis(4));
