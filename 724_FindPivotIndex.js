// Given an array of integers nums, write a method that returns the "pivot" index of this array.
//
//     We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.
//
//     If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.
//
//     Example 1:
// Input:
//     nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation:
//     The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
// Also, 3 is the first index where this occurs.
//     Example 2:
// Input:
//     nums = [1, 2, 3]
// Output: -1
// Explanation:
//     There is no index that satisfies the conditions in the problem statement.
//     Note:
//
// The length of nums will be in the range [0, 10000].
//     Each element nums[i] will be an integer in the range [-1000, 1000].

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length == 0) {
        return -1;
    }
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < nums.length; i++) {
        sum1 += nums[i];
    }
    if(sum1 - nums[0] == 0) {
        return 0;
    }
    for(var j = 0; j < nums.length; j++) {
        sum2 += nums[j];
        if(sum2 == sum1 - nums[j+1] - sum2) {
            return j+1;
        }
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([1, 2, 3, 2, 1]));
console.log(pivotIndex([]));
console.log(pivotIndex([-1,-1,-1,-1,-1,0]));
console.log(pivotIndex([-1,-1,-1,0,1,1]));