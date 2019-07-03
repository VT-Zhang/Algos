/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isCompleteTree(root) {
    let queue = [root];
    let isLast = false;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) {
            if (isLast) {
                return false;
            }
            queue.push(node.left);
        } else {
            isLast = true;
        }
        if (node.right) {
            if (isLast) {
                return false;
            }
            queue.push(node.right);
        } else {
            isLast = true;
        }
    }
    return true;
}


/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
