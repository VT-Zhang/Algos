// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements
// appear twice and others appear once.
//
// Find all the elements of [1, n] inclusive that do not appear in this array.
//
// Could you do it without extra space and in O(n) runtime? You may assume the
// returned list does not count as extra space.
//
// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
    //sort the array first
    var counter = 0;
    while(counter < nums.length){
        for(let i=0; i<nums.length; i++){
            var temp;
            if(nums[i] > nums[i+1]){
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
        counter++;
        i=0;
    }
    console.log(nums);

    //remove the duplicated elements
    for(let i=0; i<nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i,1);
        }
    }
    console.log(nums);
    //find the missing numbers
    var result = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== nums[i+1]-1){
            var temp1 = nums[i]+1;
            var diff = nums[i+1]-nums[i];
            while(diff>1){
                result.push(temp1);
                temp1++;
                diff--;
            }
        }
    }
    console.log(nums);
    console.log(result);
    return result;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
findDisappearedNumbers([1,1]);
