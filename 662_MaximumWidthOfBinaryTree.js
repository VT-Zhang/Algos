/**
 * @param {TreeNode} root
 * @return {number}
 */
function widthOfBinaryTree(root) {
    let min = [0], max = 0;

    dfs(root, 0, 0);
    return max;

    function dfs(value, level, pos) {
        if (!value) {
            return;
        }
        if (level === min.length) {
            min[level] = pos;
        }
        let delta = pos - min[level];
        max = Math.max(max, delta + 1);
        dfs(value.left, level + 1, delta * 2);
        dfs(value.right, level + 1, delta * 2 + 1);
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
