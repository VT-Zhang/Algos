// Find the contiguous subarray within an array (containing at least 
// one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var res = [];
    for(var i=0; i<nums.length; i++){
        var sum = nums[i];
        if(i === 0){
            res.push(nums[i]);            
        }
        if(i === nums.length - 1){
            res.push(nums[i]);
        }
        for(var j=i+1; j<nums.length; j++){
            sum += nums[j];
            res.push(sum);
        }
    }
    console.log(res);
    var max = res[0];
    for(var k=1; k<res.length; k++){
        if(max<res[k]){
            max = res[k];
        }
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1,2,3,4]));
console.log(maxSubArray([2,-2,-1,4]));
console.log(maxSubArray([-1,-2]));