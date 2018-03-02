// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly
// twice. Find the two elements that appear only once.
//
//     For example:
//
//     Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
//
//     Note:
// The order of the result is not important. So in the above example, [5, 3] is also correct.
//     Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
//     Credits:
//     Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    var res = [];
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    for (var key in map) {
        if (map[key] === 1) {
            res.push(parseInt(key));
        }
    }
    return res;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));