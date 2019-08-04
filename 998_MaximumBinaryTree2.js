/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoMaxTree(root, val) {
    if (root && root.val > val) {
        root.right = insertIntoMaxTree(root.right, val);
        return root;
    }
    let newNode = new TreeNode(val);
    newNode.left = root;
    return newNode;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
