// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
//     Each element in the array represents your maximum jump length at that position.
//
//     Determine if you are able to reach the last index.
//
//     For example:
//     A = [2,3,1,1,4], return true.
//
//     A = [3,2,1,0,4], return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var lastPosition = nums[0];
    for(var i = 1; i < nums.length && lastPosition >= i; i++) {
        lastPosition = Math.max(lastPosition, i + nums[i]);
    }
    return lastPosition >= nums.length - 1;
};
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([1]));
console.log(canJump([2]));