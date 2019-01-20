/**
 * @param {Node} root
 * @return {number[]}
 */
function postorder(root) {
    let array = [];
    if (root === null) {
        return array;
    }
    let stack = [];
    stack.push(root);

    while(stack.length !== 0) {
        root = stack.pop();
        array.push(root.val);
        root.children.forEach(function(node) {
            stack.push(node);
        });
    }
    return array.reverse();
}

function Node(val, children) {
    this.val = val;
    this.children = children;
}
