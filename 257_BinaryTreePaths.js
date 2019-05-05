/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
    let res = [];
    dfs(root, "");

    function dfs(root, currentPath) {
        if (root === null) {
            return;
        }
        if (root.left === null && root.right === null) {
            currentPath += root.val;
            res.push(currentPath);
            return;
        }
        dfs(root.left, currentPath + root.val + "->");
        dfs(root.right, currentPath + root.val + "->");
    }
    return res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
