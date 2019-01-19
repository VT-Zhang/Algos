/**
 * @param {number} N
 * @return {TreeNode[]}
 */
function allPossibleFBT(N) {
    if (N % 2 === 0) {
        return [];
    }
    if (N === 1) {
        return [new TreeNode(0)];
    }
    let trees = [];
    for (let i = 1; i <= N - 2; i += 2) {
        let leftTrees = allPossibleFBT(i);
        let rightTrees = allPossibleFBT(N - 1 - i);
        leftTrees.forEach(leftTree => {
            rightTrees.forEach(rightTree => {
                let root = new TreeNode(0);
                root.left = leftTree;
                root.right = rightTree;
                trees.push(root);
            });
        });
    }
    return trees;
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
