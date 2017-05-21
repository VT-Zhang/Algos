// Given a non-empty array of integers, return the third maximum number in this
// array. If it does not exist, return the maximum number. The time complexity must
//  be in O(n).
//
// Example 1:
// Input: [3, 2, 1]
//
// Output: 1
//
// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]
//
// Output: 2
//
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]
//
// Output: 1
//
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

var thirdMax = function(nums) {
    if(nums===[]){
        return false;
    }
    var max = nums[0];
    for(let i=0;i<nums.length;i++){
        if(max<nums[i]){
            max = nums[i];
        }
    }
    console.log(max);
    for(let i=0;i<nums.length;i++){
        if(nums[i]===max){
            nums.splice(i,1);
        }
    }
    console.log(nums);
    if(nums===[]){
        return max;
    }
    var max2 = nums[0];
    for(let i=0;i<nums.length;i++){
        if(max2<nums[i]){
            max2 = nums[i];
        }
    }
    console.log(max2);
    for(let i=0;i<nums.length;i++){
        if(nums[i]===max2){
            nums.splice(i,1);
        }
    }
    console.log(nums);
    if(nums===[]){
        return max;
    }
    var max3 = nums[0];
    for(let i=0;i<nums.length;i++){
        if(max3<nums[i]){
            max3 = nums[i];
        }
    }
    return max3;
};

// console.log(thirdMax([2,2,3,1]));
console.log(thirdMax([2,1]));
