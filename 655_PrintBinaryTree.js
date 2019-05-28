/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
function printTree(root) {
    if (!root) {
        return [];
    }
    let level = findHeight(root);
    let width = 2 ** level - 1;

    let res = [];
    for (let i = 0; i < level; i++) {
        res.push(new Array(width).fill(''));
    }
    fillValues(res, root, 0, 0, width - 1);
    return res;
}

function findHeight(node) {
    if (!node) {
        return 0;
    }
    return 1 + Math.max(findHeight(node.left), findHeight(node.right));
}

function fillValues(res, node, row, left, right) {
    if (!node) {
        return
    }

    let mid = Math.floor((right - left) / 2) + left;
    res[row][mid] = node.val.toString();

    fillValues(res, node.left, row + 1, left, mid - 1);
    fillValues(res, node.right, row + 1, mid + 1, right);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
