/**
 * @param {ListNode} head
 * @return {number[]}
 */
function nextLargerNodes(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let res = new Array(arr.length).fill(0);
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        while ((stack.length > 0) && (arr[stack[stack.length - 1]] < arr[i])) {
            res[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
