/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function increasingBST(root) {
    let array = [];
    function inOrder(root) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        array.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);

    let res = new TreeNode();
    let temp = res;
    for (let i = 0; i < array.length; i++) {
        temp.val = array[i];
        if (i < array.length - 1) {
            temp.right = new TreeNode();
            temp = temp.right;
        }
    }
    return res;
}


/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
