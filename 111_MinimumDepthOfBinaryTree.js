// Given a binary tree, find its minimum depth.
//     The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

/**
 * Definition for a binary tree node.
 */
function TreeNode (val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    var leftDepth = minDepth(root.left);
    var rightDepth = minDepth(root.right);

    if (leftDepth !== 0 && rightDepth !== 0) {
        return Math.min(leftDepth, rightDepth) + 1;
    } else if (leftDepth === 0) {
        return rightDepth + 1;
    } else {
        return leftDepth + 1;
    }
}