/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
    if (!head || !head.next) {
        return head;
    }
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let second = slow.next;
    slow.next = null;
    head = sortList(head);
    second = sortList(second);
    return mergeTow(head, second);
}

function mergeTow(node1, node2) {
    let temp = new ListNode(-1);
    let head = temp;
    while (node1 && node2) {
        if (node1.val < node2.val) {
            head.next = node1;
            node1 = node1.next;
        } else {
            head.next = node2;
            node2 = node2.next;
        }
        head = head.next;
    }
    if (node1) {
        head.next = node1;
    }
    if (node2) {
        head.next = node2;
    }
    return temp.next;
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
