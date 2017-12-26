// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
//
//     Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
//
//     Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Note:
//     The given array size will in the range [2, 10000].
//     The given array's numbers won't have any order.The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
//
//     Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
//
//     Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Note:
//     The given array size will in the range [2, 10000].
//     The given array's numbers won't have any order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var flag = [];
    var res = [];
    for(var i = 0; i <= nums.length; i++) {
        flag[i] = false;
    }
    for(var j = 0; j < nums.length; j++) {
        if(flag[nums[j]] == true) {
            res.push(nums[j]);
        }
        flag[nums[j]] = true;
    }
    for(var i = 1; i < flag.length; i++) {
        if(flag[i] == false) {
            res.push(i);
        }
    }
    return res;
};

findErrorNums([3,4,6,5,5,8,1,2]);
findErrorNums([1,1]);
findErrorNums([2,2]);
findErrorNums([3,2,2]);
