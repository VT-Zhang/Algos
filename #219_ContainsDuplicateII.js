// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such
// that nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length == 0) {
        return false;
    }
    var dict = {};
    var res = [];
    for(var i = 0; i < nums.length; i++) {
        if(!dict[nums[i]]) {
            dict[nums[i]] = 1;
        }
        else {
            dict[nums[i]]++;
        }
    }
    // console.log(dict);
    for(var key in dict) {
        if(dict[key] > 1) {
            for(var j = 0; j < nums.length; j++) {
                if(nums[j] == key) {
                    res.push(j);
                }
            }
        }
    }
    if(res.length == 0) {
        return false;
    }
    // console.log(res);
    for(var l = 0; l < res.length - 1; l++) {
        if(res[l] - res[l+1] > k) {
            return false;
        }
    }
    return true;
};
console.log(containsNearbyDuplicate([1,3,4,2,4,5], 2));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([0,1,2,3,4,0,0,7,8,9,10,11,12,0],1));
console.log(containsNearbyDuplicate([],0));
console.log(containsNearbyDuplicate([1],1));
console.log(containsNearbyDuplicate([1,2,1],0));