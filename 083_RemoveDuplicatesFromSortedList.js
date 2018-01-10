// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
//     For example,
//     Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

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
var deleteDuplicates = function(head) {
    var runner = head;
    while(runner && runner.next) {
        if(runner.val == runner.next.val) {
            runner.next = runner.next.next;
        }
        else {
            runner = runner.next;
        }
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}