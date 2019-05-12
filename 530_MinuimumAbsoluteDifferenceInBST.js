/**
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
    let nodes = [];
    dfs(root);
    let res = nodes[1] - nodes[0];
    for (let i = 1; i < nodes.length - 1; i++) {
        res = Math.min(res, nodes[i + 1] - nodes[i]);
    }

    function dfs(root) {
        if (root !== null) {
            dfs(root.left);
            nodes.push(root.val);
            dfs(root.right);
        }
    }

    return res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
