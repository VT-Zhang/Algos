/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
    let levels = [];

    if (root) {
        putLevels(root, 0);
    }

    return levels;

    function putLevels(root, depth) {
        if (root) {
            if (!levels[depth]) {
                levels[depth] = [];
            }
            levels[depth].push(root.val);
        }
        depth++;
        for (let i = 0; i < root.children.length; i++) {
            putLevels(root.children[i], depth)
        }
    }
}

function Node(val, children) {
    this.val = val;
    this.children = children;
}

