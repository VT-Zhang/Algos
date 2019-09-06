/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
    let minLevel = 0, maxSum = root.val, levels = [];

    traverse(root, 0);

    for (let i = 0; i < levels.length; i++) {
        if (levels[i] > maxSum) {
            maxSum = levels[i];
            minLevel = i;
        }
    }

    return minLevel + 1;

    function traverse(node, level) {
        if (node === null) {
            return;
        }
        if (levels[level]) {
            levels[level] += node.val;
        } else {
            levels[level] = node.val;
        }
        level++;
        traverse(node.left, level);
        traverse(node.right, level);
    }
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
