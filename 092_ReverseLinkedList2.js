/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
    let before = {next: head};
    let prev = before;

    while (--m) {
        prev = prev.next;
        --n;
    }

    let runner = prev.next;
    while (--n) {
        let next = runner.next;
        runner.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return before.next;
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
