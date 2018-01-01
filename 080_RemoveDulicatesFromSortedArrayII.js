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
    var length = nums.length;
    for(var i = 0; i < length; i++){
        if(nums[i] == nums[i+2]){
            nums.splice(i,1);
            i--;
            length--;
        }
    }
    console.log(nums);
    return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([]));
console.log(removeDuplicates([1,2]));
console.log(removeDuplicates([1,1,1,2]));