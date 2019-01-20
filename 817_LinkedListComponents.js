/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
function numComponents(head, G) {
   let count = 0;
   let isConnected = false;
   let i = 0;
   while (head !== null && i !== G.length) {
       if (!G.includes(head.val)) {
           head = head.next;
           isConnected = false;
           continue;
       }
       if (isConnected) {
           head = head.next;
       } else {
           isConnected = true;
           count++;
           head = head.next;
       }
       i++;
   }
   return count;
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
