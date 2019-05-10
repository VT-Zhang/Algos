/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function findFrequentTreeSum(root) {
    let res = [], map = {}, max = 0;
    findSum(root);
    for (let key in map) {
        if (map[key] === max) {
            res.push(parseInt(key));
        }
    }
    return res;

    function findSum(root) {
        let left, right;
        if (!root) {
            return 0;
        }
        left = findSum(root.left);
        right = findSum(root.right);
        let sum = left + right + root.val;
        root.val = sum;
        map[sum] = (map[sum] || 0) + 1;
        max = Math.max(max, map[sum]);
        return sum;
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
