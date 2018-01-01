// Reverse a singly linked list.
//
//     click to show more hints.
//
//     Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return head;
    }
    var last = null;
    var next = null;
    while(head) {
        next = head.next;
        head.next = last;
        last = head;
        head = next;
    }
    return last;
};