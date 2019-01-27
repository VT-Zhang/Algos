/**
 * @param {TreeNode} root
 * @return {number}
 */
function longestUnivaluePath(root) {
    if (!root) {
        return 0;
    }
    return Math.max(longestUnivaluePath(root.left),
                    longestUnivaluePath(root.right),
                    helper(root.left, root.val) + helper(root.right, root.val))
}

function helper(node, val) {
    if (!node || node.val !== val) {
        return 0;
    }
    return Math.max(helper(node.left, val), helper(node.right, val)) + 1;
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
