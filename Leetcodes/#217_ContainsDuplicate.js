// Given an array of integers, find if the array contains any duplicates. Your function
// should return true if any value appears at least twice in the array, and it should
// return false if every element is distinct.

var containsDuplicate = function(nums) {
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            if(nums[i]===nums[j]){
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false
};

containsDuplicate([5,6,5,4,2,3,1]);
