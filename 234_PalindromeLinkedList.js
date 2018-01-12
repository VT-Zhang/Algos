// Given a singly linked list, determine if it is a palindrome.
//
//     Follow up:
//     Could you do it in O(n) time and O(1) space?

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
var isPalindrome = function(head) {
    var arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    for(var i = 0, j = arr.length -1; i< j; i++, j--) {
        if(arr[i] != arr[j]) {
            return false;
        }
    }
    return true;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}