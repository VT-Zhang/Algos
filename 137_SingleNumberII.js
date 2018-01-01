// Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
//
//     Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var dict = {};
    for(var i = 0; i < nums.length; i++) {
        if(dict[nums[i]]) {
            dict[nums[i]]++;
        }
        else {
            dict[nums[i]] = 1;
        }
    }
    for(var key in dict) {
        if(dict[key] == 1) {
            return parseInt(key);
        }
    }
};

console.log(singleNumber([1,2,2,2,1,1,3,4,4,5,4,5,5]));