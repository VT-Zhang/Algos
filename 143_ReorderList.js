/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    if (!head) {
        return head;
    }
    let root = head;
    let tail = head;
    while (tail && tail.next) {
        tail.next.parent = tail;
        tail = tail.next;
    }

    while (root !== tail && root.next !== tail) {
        let next = root.next;
        tail.next = next;
        root.next = tail;
        root = next;
        tail = tail.parent;
        tail.next = null;
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
