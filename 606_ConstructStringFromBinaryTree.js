/**
 * @param {TreeNode} t
 * @return {string}
 */
function tree2str(t) {
    if (!t) {
        return '';
    }
    let left = tree2str(t.left);
    let right = tree2str(t.right);
    return t.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');
}


/**
 * Definition for a binary tree node.
 */
function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}
