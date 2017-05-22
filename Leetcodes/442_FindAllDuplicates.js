// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements
// appear twice and others appear once.
//
// Find all the elements that appear twice in this array.
//
// Could you do it without extra space and in O(n) runtime?
//
// Example:
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

var findDuplicates = function(nums) {
    var ns = [];
    var dict = {};
    for(let i=0;i<nums.length;i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = 1;
        }
        else{
            dict[nums[i]] += 1;
        }
    }
    console.log(dict);
    for(var key in dict){
        if(dict[key]===2){
            ns.push(parseInt(key));
        }
    }
    console.log(ns);
    return ns;
};

findDuplicates([4,3,2,7,8,2,3,1]);
