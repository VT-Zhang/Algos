/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
function delNodes(root, to_delete) {
    let res = [];
    if (!root) {
        return res;
    }
    traverse(root, true);
    return res;

    function traverse(node, isRoot) {
        if (!node) {
            return;
        }
        let isNodeDeleted = to_delete.includes(node.val);
        if (node.left) {
            node.left = traverse(node.left, isNodeDeleted);
        }
        if (node.right) {
            node.right = traverse(node.right, isNodeDeleted);
        }
        if (isRoot && !isNodeDeleted) {
            res.push(node);
        }
        return isNodeDeleted ? null: node;
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
