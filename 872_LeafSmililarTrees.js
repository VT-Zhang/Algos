/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
    return helper(root1) === helper(root2);
}

function helper(root) {
    let array = [];
    inOrder(root, array);
    return array.join(",");
}

function inOrder(root, array) {
    if (!root) {
        return null;
    }
    if (!root.left && !root.right) {
        array.push(root.val);
    }
    inOrder(root.left, array);
    inOrder(root.right, array);
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
