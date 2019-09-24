/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    let res = 0;
    dfs(root);

    return res;

    function dfs(node, level) {
        if (!node) {
            return 0;
        }
        let left = dfs(node.left);
        let right = dfs(node.right);

        res = Math.max(res, left + right);
        return 1 + Math.max(left, right);
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
