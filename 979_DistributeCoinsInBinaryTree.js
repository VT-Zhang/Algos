/**
 * @param {TreeNode} root
 * @return {number}
 */
function distributeCoins(root) {
    if (!root) {
        return 0;
    }
    let move = 0;
    postOrder(root, null);
    return move;

    function postOrder(node, parent) {
        if (!node) {
            return;
        }
        postOrder(node.left, node);
        postOrder(node.right, node);
        if (node.val > 1) {
            move += node.val - 1;
            parent.val += node.val -1;
        } else if (node.val < 1) {
            move += 1 - node.val;
            parent.val -= 1 - node.val;
        }
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
