/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
    let array = [];
    if (root === null) {
        return array;
    }
    let stack = [];
    stack.push(root);
    while (stack.length !== 0) {
        root = stack.pop();
        array.push(root.val);
        for (let i = root.children.length - 1; i >= 0; i--) {
            stack.push(root.children[i]);
        }
    }
    return array;
}

function Node(val, children) {
    this.val = val;
    this.children = children;
}
