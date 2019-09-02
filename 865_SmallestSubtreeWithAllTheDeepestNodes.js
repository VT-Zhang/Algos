/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function subtreeWithAllDeepest(root) {
    let maxDepth = findMaxDepth(root);
    return deepestNode(root, 1, maxDepth);
}

function findMaxDepth(node) {
    if (!node) {
        return 0;
    }
    return Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1;
}

function deepestNode(node, depth, maxDepth) {
    if (!node) {
        return null;
    }
    if (depth === maxDepth) {
        return node;
    }
    let left = deepestNode(node.left, depth + 1, maxDepth);
    let right = deepestNode(node.right, depth + 1, maxDepth);
    if (left && right) {
        return node;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    }
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
