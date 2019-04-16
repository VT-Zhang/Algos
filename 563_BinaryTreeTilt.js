/**
 * @param {TreeNode} root
 * @return {number}
 */
function findTilt(root) {
    let tilt = 0;

    function postOrder(root) {
        if (root === null) {
            return 0;
        }
        let left = postOrder(root.left);
        let right = postOrder(root.right);
        tilt += Math.abs(left - right);
        return root.val + left + right;
    }

    postOrder(root);
    return tilt;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
