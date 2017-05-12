// Given an array of size n, find the majority element. The majority element is
// the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist
//  in the array.

var majorityElement = function(nums) {
    //bubbleSort the array first;
    var counter = 0;
    while(counter < nums.length){
        for(var i=0; i<nums.length; i++){
            var temp;
            if(nums[i] > nums[i+1]){
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
        console.log(nums);
        counter++;
        i=0;
    }
    //return the center element of the array;
    var result = nums[Math.floor(nums.length/2)];
    console.log(result);
    return result;
};

majorityElement([1,2,2,2,1]);
majorityElement([1,2,1]);
majorityElement([1,2,2,2,1,3,3,3,3,3,3]);
