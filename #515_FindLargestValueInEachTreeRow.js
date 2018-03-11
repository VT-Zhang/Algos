// You need to find the largest value in each row of a binary tree.
//
//     Example:
// Input:
//
//     1
//     / \
//     3   2
//     / \   \
//   5   3   9
//
// Output: [1, 3, 9]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root) {
        return [];
    }
    var res = [];
    var left = largestValues(root.left);
    var right = largestValues(root.right);
    for(var i = 0; i < left.length || i < right.length; i++) {
        if(!left[i]) {
            res.push(right[i]);
        }
        else if(!right[i]) {
            res.push(left[i]);
        }
        else {
            res.push(Math.max(left[i], right[i]));
        }
    }
    res.unshift(root.val);
    return res;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
