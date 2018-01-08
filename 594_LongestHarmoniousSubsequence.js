// We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.
//
// Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.
//
//     Example 1:
// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
//     Note: The length of the input array will not exceed 20,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++;
        }
        else {
            map[nums[i]] = 1;
        }
    }
    console.log(map);
    var max = 0;
    var arr = [];
    for(var key in map) {
        arr.push(parseInt(key));
    }
    console.log(arr);
    for(var k = 0; k < arr.length - 1; k++) {
        if(Math.abs(arr[k] - arr[k+1]) <= 1) {
            max = Math.max(max, map[arr[k]] + map[arr[k+1]]);
        }
    }
    return max;
};
console.log(findLHS([1,3,2,2,5,2,3,7]));