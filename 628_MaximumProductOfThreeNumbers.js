// Given an integer array, find three numbers whose product is maximum and 
// output the maximum product.

// Example 1:
// Input: [1,2,3]
// Output: 6
// Example 2:
// Input: [1,2,3,4]
// Output: 24

// Note:
// The length of the given array will be in range [3,104] and all elements 
// are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range 
// of 32-bit signed integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort(function(a,b){
        return a - b;
    });
    nums.reverse();
    console.log(nums);
    var max1 = nums[0];
    var max2 = nums[1];
    var max3 = nums[2];
    var min1 = nums[nums.length-1];
    var min2 = nums[nums.length-2];
    if(min1 * min2 * max1 > max1 * max2 * max3){
        console.log(min1 * min2 * max1);
        return min1 * min2 * max1
    }
    else {
        console.log(max1 * max2 * max3);
        return max1 * max2 * max3;
    }
};

maximumProduct([4,1,3,2]);
maximumProduct([4,0,3,0]);
maximumProduct([-4,-1,2,3]);
maximumProduct([1000,1000,2,1,2,5,3,1]);


