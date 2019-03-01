/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root) {
        return true;
    }
    function mirror(a, b) {
        if (!a && !b) {
            return true;
        }
        if (!a || !b || a.val !== b.val) {
            return false;
        }
        return mirror(a.left, b.right) && mirror(a.right, b.left);
    }
    return mirror(root.left, root.right);
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
