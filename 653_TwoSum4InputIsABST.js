/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function findTarget(root, k, map = {}) {
    if (!root) {
        return false;
    }
    if (k - root.val in map) {
        return true;
    }
    map[root.val] = 1;
    return findTarget(root.left, k, map) || findTarget(root.right, k , map);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
