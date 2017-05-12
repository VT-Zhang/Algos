// Given an array of integers, every element appears twice except for one.
// Find that single one.

var singleNumber = function(nums) {
    var counter = 0;
    for (var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length; j++){
            if(nums[i]===nums[j]){
                counter++;
            }
        }
        if(counter===1){
            return nums[i];
        }
        counter = 0;
    }
};

console.log(singleNumber([1,3,1,4,4,3,2,5,6,6,5]));
