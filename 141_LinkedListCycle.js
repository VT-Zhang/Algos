// Given a linked list, determine if it has a cycle in it.
//
//     Follow up:
//     Can you solve it without using extra space?
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next){
        return false;
    }
    var walk = head.next;
    var run = head.next.next;
    if(!run) {
        return false;
    }
    while(walk != run) {
        if(!run.next) {
            return false;
        }
        walk = walk.next;
        run = run.next.next;
        if(walk == null || run == null) {
            return false;
        }
    }
    return true;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}