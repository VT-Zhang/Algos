// Given a sorted array consisting of only integers where every element appears twice except for one element which
// appears once. Find this single element that appears only once.
//
//     Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10
// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate (nums) {
    var dict = {};
    for (var i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            dict[nums[i]]++;
        } else {
            dict[nums[i]] = 1;
        }
    }
    for (var key in dict) {
        if (dict[key] === 1) {
            return parseInt(key);
        }
    }
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));