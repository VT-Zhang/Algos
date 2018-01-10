// Remove all elements from a linked list of integers that have value val.
//
//     Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5
//
// Credits:
//     Special thanks to @mithmatt for adding this problem and creating all test cases.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) {
        return null;
    }
    var node = new ListNode(-1);
    node.next = head;
    var prev = node;
    var runner = head;
    while(prev && prev.next) {
        if(runner.val == val) {
            prev.next = runner.next;
            runner = prev.next;
        }
        else{
            prev = runner;
            runner = runner.next;
        }
    }
    return node.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}