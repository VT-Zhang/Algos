/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDiffInBST(root) {
    let min = Number.MAX_VALUE;
    let pre = null;
    function traverse(node) {
        if (node.left) {
            traverse(node.left)
        }
        if (pre !== null) {
            min = Math.min(node.val - pre, min);
        }
        pre = node.val;
        if (node.right) {
            traverse(node.right)
        }
    }
    traverse(root);
    return min;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
