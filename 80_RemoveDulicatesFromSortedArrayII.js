// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?
//
//     For example,
//     Given sorted array nums = [1,1,1,2,2,3],
//
//     Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
// It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var res = 0;
    var dict = {};
    for(var i = 0; i < nums.length; i++) {
        if(!dict[nums[i]]) {
            dict[nums[i]] = 1;
        }
        else {
            dict[nums[i]]++;
        }
    }
    console.log(dict);
    for(var key in dict) {
        if(dict[key] > 2) {
            res += 2;
        }
        else {
            res += dict[key];
        }
    }
    return res;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([]));
console.log(removeDuplicates([1,2]));
console.log(removeDuplicates([1,1,1,2]));