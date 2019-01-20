/**
 * @param {Node} root
 * @return {number}
 */
function maxDepth(root) {
    if (!root) {
        return 0;
    }
    let max = 0;
    root.children.forEach(child => {
        max = Math.max(max, maxDepth(child))
    });
    return max + 1;
}

function Node(val, children) {
    this.val = val;
    this.children = children;
}
