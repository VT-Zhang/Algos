/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function pathSum(root, sum) {
    if (!root) {
        return 0;
    }
    return dfs(root, 0, sum)
        + pathSum(root.left, sum)
        + pathSum(root.right, sum);

    function dfs(root, pre, sum) {
        if (!root) {
            return 0;
        }
        let total = pre + root.val;
        return (total === sum)
            + dfs(root.left, total, sum)
            + dfs(root.right, total, sum);
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
