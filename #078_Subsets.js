// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a,b){return a-b});
    var res = [];
    var arr = [];
    var dict = {};
    for(var i=0; i<nums.length; i++){
        arr.push(nums[i]);
        if(!dict[arr]){
            dict[arr] = 1;
        }
        else dict[arr]++;
        for(var j=i+1; j<nums.length; j++){
            arr.push(nums[j]);
            if(!dict[arr]){
                dict[arr] = 1;
            }
            else dict[arr]++;
        }
    }
    console.log(dict);

    
};

subsets([2,1,3]);