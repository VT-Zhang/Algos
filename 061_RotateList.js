/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
    let tail = head;
    if (!head) {
        return null;
    }
    let length = 1;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    tail.next = head;
    let count = length - (k % length);
    while (count > 0) {
        head = head.next;
        tail = tail.next;
        count--;
    }
    tail.next = null;
    return head;
}


/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
