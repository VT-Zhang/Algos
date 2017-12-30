// Given two arrays, write a function to compute their intersection.
//
//     Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
//     Note:
// Each element in the result must be unique.
//     The result can be in any order.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length == 0 || nums2.length == 0) {
        return [];
    }
    if(nums1.length >= nums2.length) {
        var long = nums1;
        var short = nums2;
    }
    else {
        var long = nums2;
        var short = nums1;
    }
    var res = [];
    var set = new Set();
    for(var i = 0; i < long.length; i++) {
        set.add(long[i]);
    }
    for(var j = 0; j < short.length; j++) {
        if(set.has(short[j])) {
            set.delete(short[j]);
            res.push(short[j]);
        }
    }
    return res;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([1, 2], [2, 1]));
