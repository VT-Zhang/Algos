/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function constructMaximumBinaryTree(nums) {
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        let cur = new TreeNode(nums[i]);
        while (stack.length && stack[stack.length - 1].val < nums[i]) {
            cur.left = stack.pop();
        }
        if (stack.length) {
            stack[stack.length - 1].right = cur;
        }
        stack.push(cur);
    }
    return stack.length ? stack.shift() : null;
}

/**
 * Definition for a binary tree node.
 **/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
