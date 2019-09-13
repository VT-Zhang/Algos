/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode(root) {
    let max = -Infinity;
    let prev = null;
    let num = 1;
    let res = [];
    let tree = node => {
        if (!node) return;
        tree(node.left);
        if (prev) {
            num = prev.val === node.val ? num + 1 : 1;
        }
        if (num >= max) {
            if (num > max) res.length = 0;
            res.push(node.val);
            max = num;
        }
        prev = node;
        tree(node.right);
    };
    tree(root);

    return res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
