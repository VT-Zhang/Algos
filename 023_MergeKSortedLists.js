/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    let res = null;
    lists.forEach(list => {
        res = mergeTwoLists(res, list);
    });
    return res;
}

function mergeTwoLists(l1, l2) {
    let res = null;
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        res = l1;
        res.next = mergeTwoLists(l1.next, l2);
    } else {
        res = l2;
        res.next = mergeTwoLists(l1, l2.next);
    }
    return res;
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
