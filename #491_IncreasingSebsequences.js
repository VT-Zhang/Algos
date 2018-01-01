// Given an integer array, your task is to find all the different possible increasing subsequences of the given array,
//     and the length of an increasing subsequence should be at least 2 .
//
//     Example:
// Input: [4, 6, 7, 7]
// Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
// Note:
//     The length of the given array will not exceed 15.
// The range of integer in the given array is [-100,100].
//     The given array may contain duplicates, and two equal integers should also be considered as a special case of
// increasing sequence.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    var res = [];
    var arr = nums.sort(function (a, b) { return a - b });
    console.log(arr);
    for(var i = 2; i < arr.length; i++) {
        var temp = [];
        for(var j = 0; j < arr.length; j++) {
            temp.push(arr[j]);
        }
        res.push(temp);
    }
    return res;
};

console.log(findSubsequences([4,7,6,7]));