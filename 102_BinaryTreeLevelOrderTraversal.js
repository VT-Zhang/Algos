/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    let res = [];
    preOrder(root, 0, res);
    return res;
}

function preOrder(root, level, res) {
    if (!root) {
        return;
    }
    if (level in res) {
        res[level].push(root.val);
    } else {
        res[level] = [root.val];
    }
    preOrder(root.left, level + 1, res);
    preOrder(root.right, level + 1, res);
    return;
}


/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
