// In a given integer array nums, there is always exactly one largest element.
//
//     Find whether the largest element in the array is at least twice as much as every other number in the array.
//
//     If it is, return the index of the largest element, otherwise return -1.
//
// Example 1:
// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
//     6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
// Note:
//     nums will have a length in the range [1, 50].
//     Every nums[i] will be an integer in the range [0, 99].

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max = nums[0];
    var res = [];
    for(var i = 1; i < nums.length; i++){
        if(nums[i] > max) {
            max = nums[i];
            res.push(i);
        }
    }
    // console.log(max);
    // console.log(res);
    for(var j = 0; j < nums.length; j++) {
        if(nums[j] != 0 && nums[j] != max){
            // console.log(Math.floor(max / nums[j]));
            if(Math.floor(max / nums[j]) < 2) {
                return -1;
            }
        }
    }
    if(res.length != 0){
        return res[res.length-1];
    }
    return 0;
};

console.log(dominantIndex([3,6,1,0]));
console.log(dominantIndex([1,2,3,4]));
console.log(dominantIndex([4,2,1]));
console.log(dominantIndex([1]));
console.log(dominantIndex([1,2]));
console.log(dominantIndex([2,1]));