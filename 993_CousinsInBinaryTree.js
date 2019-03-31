/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins(root, x, y) {
    let xParent, yParent, xDepth, yDepth;

    function traverseDFS(node, x, y, depth) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            return;
        }

        depth = depth || 0;

        if (node.left) {
            if (node.left.val === x) {
                xParent = node;
                xDepth = depth;
            } else if (node.left.val === y) {
                yParent = node;
                yDepth = depth;
            }
            traverseDFS(node.left, x, y, depth + 1);
        }

        if (node.right) {
            if (node.right.val === x) {
                xParent = node;
                xDepth = depth;
            } else if (node.right.val === y) {
                yParent = node;
                yDepth = depth;
            }
            traverseDFS(node.right, x, y, depth + 1);
        }
    }
    traverseDFS(root, x, y, 0);
    return xDepth === yDepth && xParent !== yParent;
}
