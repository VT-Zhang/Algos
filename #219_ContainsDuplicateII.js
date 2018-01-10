// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such
// that nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var dict = {};
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] in dict && Math.abs(i - dict[nums[i]]) <= k) {
            return true;
        }
        dict[nums[i]] = i;
        console.log(dict);
    }
    return false;
};
console.log(containsNearbyDuplicate([1,3,4,2,4,5], 2));
// console.log(containsNearbyDuplicate([1,0,1,1], 1));
// console.log(containsNearbyDuplicate([0,1,2,3,4,0,0,7,8,9,10,11,12,0],1));
// console.log(containsNearbyDuplicate([],0));
// console.log(containsNearbyDuplicate([1],1));
// console.log(containsNearbyDuplicate([1,2,1],0));