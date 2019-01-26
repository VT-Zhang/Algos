/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
    let map = {};
    preOrder(root, 1, map);
    let res = [];
    for (let key in map) {
        let sum = 0;
        if (map.hasOwnProperty(key)) {
            map[key].map(function(num) {
                sum += num;
            });
            res.push(sum / map[key].length);
        }
    }
    return res;
}

function preOrder(root, level, map) {
    if (!root) {
        return null;
    }
    if (level in map) {
        map[level].push(root.val);
    } else {
        map[level] = [root.val];
    }
    preOrder(root.left, level + 1, map);
    preOrder(root.right, level + 1, map);
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
