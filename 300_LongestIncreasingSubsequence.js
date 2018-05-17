// Given an unsorted array of integers, find the length of longest increasing subsequence.
//
//     For example,
//     Given [10, 9, 2, 5, 3, 7, 101, 18],
//     The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than
// one LIS combination, it is only necessary for you to return the length.
//
//     Your algorithm should run in O(n2) complexity.
//
//     Follow up: Could you improve it to O(n log n) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    var arr = [];
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        arr.push(1);
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            }
        }
    }
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] > max) {
            max = arr[k];
        }
    }
    return max;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18, 2, 3, 4, 5, 6]));
console.log(lengthOfLIS([]));