// Find the contiguous subarray within an array (containing at least 
// one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray (nums) {
    var max = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < nums.length; i++) {
        var sum = 0;
        for(var j = i; j < nums.length; j++) {
            sum += nums[j];
            if(max < sum) {
                max = sum;
            }
        }
    }
    return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1,2,3,4]));
console.log(maxSubArray([2,-2,-1,4]));
console.log(maxSubArray([-1,-2]));