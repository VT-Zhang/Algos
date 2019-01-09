/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(root, L, R) {
    let res = 0;
    dfs(root);
    return res;

    function dfs(root) {
        if (root === null) {
            return;
        }
        if (root.val >= L && root.val <= R) {
            res += root.val;
        }
        if (root.val === L) {
            dfs(root.right);
        } else if (root.val === R) {
            dfs(root.left);
        } else {
            dfs(root.left);
            dfs(root.right);
        }
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
