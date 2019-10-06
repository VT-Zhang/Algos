/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
    if (root) {
        if (root.val < key) {
            root.right = deleteNode(root.right, key);
        } else if (root.val > key) {
            root.left = deleteNode(root.left, key);
        } else {
            return helper(root);
        }
    }
    return root;
}

function helper(node) {
    if (node.right === null) {
        return node.left;
    }
    if (node.left === null) {
        return node.right;
    }
    let rightLeftMostNode = node.right;
    while (rightLeftMostNode.left) {
        rightLeftMostNode = rightLeftMostNode.left;
    }
    rightLeftMostNode.left = node.left;
    return node.right;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
