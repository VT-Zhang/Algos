/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
    let tempLess = new ListNode();
    let tempMore = new ListNode();
    let node = head;
    let less = tempLess;
    let more = tempMore;

    while (node) {
        if (node.val < x) {
            less = less.next = node;
        } else {
            more = more.next = node;
        }
        node = node.next;
    }
    less.next = tempMore.next;
    more.next = null;
    return tempLess.next;
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
