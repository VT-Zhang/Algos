// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find
// the one that is missing from the array.
//
// For example,
// Given nums = [0, 1, 3] return 2.
//
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it
// using only constant extra space complexity?

var missingNumber = function(nums) {
    for(let i=0; i<nums.length; i++){
        var min = i;
        for(var j=i; j<nums.length; j++){
            if(nums[min]>nums[j]){
                min = j;
            }
        }
        if(min != i){
            var temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    for(let i=0; i<nums.length+1; i++){
        if(nums[i] !== i){
            console.log(i);
            return i;
        }
    }
};

missingNumber([0,1,2,3,4,6,7,8]);
missingNumber([0,1,2,3,4,5,6,8]);
missingNumber([0]);
missingNumber([0,1]);
missingNumber([1,0]);
