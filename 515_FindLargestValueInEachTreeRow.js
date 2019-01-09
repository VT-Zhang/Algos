// You need to find the largest value in each row of a binary tree.
//
//     Example:
// Input:
//
//     1
//     / \
//     3   2
//     / \   \
//   5   3   9
//
// Output: [1, 3, 9]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function largestValues(root) {
    if(!root) {
        return [];
    }
    let res = [];
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;
        let max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.val >= max) {
                max = node.val;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(max);
    }
    return res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
