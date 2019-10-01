/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
    return dfs(root);

    function dfs(root) {
        if (!root) {
            return 0;
        }
        let res = 0;
        if (root.left) {
            if (!root.left.left && !root.left.right) {
                res += root.left.val;
            } else {
                res += dfs(root.left);
            }
        }
        res += dfs(root.right);
        return res;
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

