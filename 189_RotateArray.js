// Rotate an array of n elements to the right by k steps.
//
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to
// [5,6,7,1,2,3,4].
//
// Note:
// Try to come up as many solutions as you can, there are at least 3 different
// ways to solve this problem.

var rotate = function(nums, k) {
    var tail = nums.length - 1;
    while(k > 0){
        temp = nums[tail]; //set the tail of the array to temp;
        nums.pop(); //delete the tail;
        nums.splice(nums[-1],0,temp); //insert the saved the temp to the 0 place;
        k--;
        console.log(nums);
    }
    console.log(nums);
};
rotate([1,2,3,4,5,6,7], 4);
