/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    if (!head) {
        return null;
    }
    let tail = head;
    for (let i = 1; i < k; i++) {
        tail = tail.next;
        if (!tail) {
            return head;
        }
    }
    let next = tail.next;
    tail.next = null;
    reverse(head);
    head.next = reverseKGroup(next, k);
    return tail;
}

function reverse(node) {
    let prev = null;
    while (node) {
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
