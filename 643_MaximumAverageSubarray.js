// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.
//
//     Example 1:
// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
// Note:
//     1 <= k <= n <= 30,000.
// Elements of the given array will be in the range [-10,000, 10,000].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var max = -50000;
    var s = 0;
    for(var m = 0; m < k; m++) {
        s += nums[m];
    }
    var a = s/k;
    if(a > max) {
        max = a;
    }
    for(var i = 0; i <= nums.length - k; i++ ) {
        var sum = 0;
        for(var j = i; j <= i + k - 1; j++) {
            sum += nums[j];
        }
        var avg = sum/k;
        if(avg > max) {
            max = avg;
        }
    }
    return max;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([0,1,1,3,3], 4));