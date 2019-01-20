/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
    if (!root || root.val === val) {
        return root;
    } else if (root.val < val) {
        return searchBST(root.right, val)
    }
    return searchBST(root.left, val)
}


/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
