/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
    let array = [];
    if (!root) {
        return array;
    }
    let queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        let currentLevel = [];
        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift();
            currentLevel.push(node.val);
            node.children.forEach(child => {
                queue.push(child);
            });
        }
        array.push(currentLevel);
    }
    return array;
}

function Node(val, children) {
    this.val = val;
    this.children = children;
}

