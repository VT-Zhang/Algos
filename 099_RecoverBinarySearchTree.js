/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function recoverTree(root) {
    let node1;
    let node2;
    let prev = new TreeNode(-Number.MAX_VALUE);
    traverse(root);
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;

    function traverse(node) {
        if (!node) {
            return;
        }
        traverse(node.left);
        if (node.val < prev.val) {
            node2 = node;
            if (!node1) {
                node1 = prev;
            }
        }
        prev = node;
        traverse(node.right);
    }
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
