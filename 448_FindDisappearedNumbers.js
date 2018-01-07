// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements
// appear twice and others appear once.
//
// Find all the elements of [1, n] inclusive that do not appear in this array.
//
// Could you do it without extra space and in O(n) runtime? You may assume the
// returned list does not count as extra space.
//
// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
    var set = new Set();
    var res = [];
    var arr = [];
    nums.sort(function (a, b) {
        return a - b;
    });
    for(var i = 0; i < nums.length; i++) {
        set.add(nums[i]);
        arr.push(i+1);
    }
    console.log(set);
    console.log(arr);
    for(var j = 0; j < arr.length; j++) {
        if(!set.has(arr[j])) {
            res.push(arr[j]);
        }
    }
    return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));
console.log(findDisappearedNumbers([1]));
