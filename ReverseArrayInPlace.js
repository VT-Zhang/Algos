var reverse = function (nums) {
    for(var i = 0; i <= nums.length/2; i++) {
        var temp = nums[i];
        nums[i] = nums[nums.length-1-i];
        nums[nums.length-1-i] = temp;
    }
    return nums;
};

console.log(reverse([1,2,3,4,5]));
console.log(reverse([1,2,3,4,5,6]));