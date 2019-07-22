/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function bstToGst(root) {
    let sum = 0;
    function traversal(node) {
        if (node === null) {
            return;
        }
        traversal(node.right);
        sum += node.val;
        node.val = sum;
        traversal(node.left);
    }
    traversal(root);
    return root;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

