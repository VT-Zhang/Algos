// Given a sorted array and a target value, return the index if the target is
// found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0

var searchInsert = function(nums, target) {
    if(target > nums[nums.length-1]){
        console.log(nums.length);
        return nums.length;
    }
    if(target < nums[0]){
        console.log(0);
        return 0;
    }
    for(var i=0;i<nums.length;i++){
        if(nums[i]===target){
            console.log(i);
            return i;
        }
        if(nums[i] < target && target < nums[i+1]){
            console.log(i+1);
            return i+1;
        }
    }
};

searchInsert([1,3,5,6], 5);
searchInsert([1,3,5,6], 2);
searchInsert([1,3,5,6], 7);
searchInsert([1,3,5,6], 0);
