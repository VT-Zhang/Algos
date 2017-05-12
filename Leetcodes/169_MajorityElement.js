// Given an array of size n, find the majority element. The majority element is
// the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist
//  in the array.

var majorityElement = function(nums) {
    var counter = 0;
    for(var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length; j++){
            if(nums[i]===nums[j]){
                counter++;
            }
            if(counter > nums.length/2){
                console.log(nums[i]);
                return nums[i];
            }
        }
        counter = 0;
    }
};

majorityElement([1,2,2,2,1]);
majorityElement([1,2,1]);
majorityElement([1,2,2,2,1,3,3,3,3,3,3]);
