/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
    let before = {
        val: -Number.MAX_VALUE, next: null
    };
    while (head) {
        let prev = before;
        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }
        let next = head.next;
        head.next = prev.next;
        prev.next = head;
        head = next;
    }
    return before.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
