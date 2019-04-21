
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumRootToLeaf(root) {
    let res = 0;
    let path = [];
    function traversal(node) {
        if (node === null) {
            return;
        }
        path.push(node.val);
        if (node.left === null && node.right === null) {
            res += parseInt(path.join(''), 2);
        } else {
            traversal(node.left);
            traversal(node.right);
        }
        path.pop();
    }
    traversal(root);
    return res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
