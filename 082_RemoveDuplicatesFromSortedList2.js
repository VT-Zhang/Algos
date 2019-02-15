/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    let node = head;
    let prev;
    while (node) {
        if (node.next && node.val === node.next.val) {
            while (node.next && node.val === node.next.val) {
                node = node.next;
            }
            if (!prev) {
                head = node.next;
            } else {
                prev.next = node.next;
            }
        } else {
            prev = node;
        }
        node = node.next;
    }
    return head;
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
