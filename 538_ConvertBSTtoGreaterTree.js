/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
    let sum = 0;

    function reverse(node) {
        if (!!node) {
            reverse(node.right);
            node.val += sum;
            sum += node.val - sum;
            reverse(node.left);
        }
        return node;
    }

    return reverse(root);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
