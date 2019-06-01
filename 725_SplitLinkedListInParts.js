/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
function splitListToParts(root, k) {
    let arr = [];
    let length = 0;
    let root1 = root;
    while (root !== null) {
        root = root.next;
        length++;
    }

    let iterator = 0;
    for (let i = k; i > 0; i--) {
        iterator = parseInt(length / i);
        if (length % i !== 0) {
            iterator++;
        }
        length -= iterator;
        let refNode = new ListNode(0);
        let res = refNode;
        for (let j = 0; j < iterator; j++) {
            refNode.next = root1;
            root1 = root1.next;
            refNode = refNode.next;
        }
        refNode.next = null;
        arr.push(res.next);
    }
    return arr;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
