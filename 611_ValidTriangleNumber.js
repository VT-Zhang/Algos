// Given an array consists of non-negative integers, your task is to 
// count the number of triplets chosen from the array that can make 
// triangles if we take them as side lengths of a triangle.

// Example 1:
// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Note:
// The length of the given array won't exceed 1000.
// The integers in the given array are in the range of [0, 1000].

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    var result = 0;
    nums.sort(function(a,b){return a-b});
    console.log(nums);
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            var sum = nums[i] + nums[j];
            for(var k=j+1; k<nums.length; k++){
                if(sum > nums[k]){
                    result++;
                }
            }
        }
    }
    console.log(result);
    return result;
};

triangleNumber([4,2,2,3,5]);