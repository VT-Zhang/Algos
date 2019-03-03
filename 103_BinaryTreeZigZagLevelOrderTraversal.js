/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    let res = [];
    if (!root) {
        return res;
    }
    let level = [];
    let s1 = [root];
    let s2 = [];
    let flag = true;

    while (s1.length > 0) {
        let node = s1.pop();
        let left = node.left;
        let right = node.right;

        level.push(node.val);

        if (flag) {
            if (left) {
                s2.push(left);
            }
            if (right) {
                s2.push(right)
            }
        } else {
            if (right) {
                s2.push(right);
            }
            if (left) {
                s2.push(left);
            }
        }

        if (s1.length === 0) {
            res.push(level);
            level = [];
            flag = !flag;
            s1 = s2;
            s2 = [];
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
