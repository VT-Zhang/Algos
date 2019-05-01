/**
 * Definition for a binary tree node.
 */
function TreeNode (val) {
    this.val = val
    this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {

    function getHeight(root) {
        if (!root) {
            return 0;
        }
        let left = getHeight(root.left);
        let right = getHeight(root.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return - 1;
        }
        return 1 + Math.max(left, right);
    }

    return getHeight(root) !== -1;
}
