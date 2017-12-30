// Given two arrays, write a function to compute their intersection.
//
//     Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
//
//     Note:
// Each element in the result should appear as many times as it shows in both arrays.
//     The result can be in any order.
//     Follow up:
//     What if the given array is already sorted? How would you optimize your algorithm?
//     What if nums1's size is small compared to nums2's size? Which algorithm is better?
//     What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memor

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
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
    var dict = {};
    for(var i = 0; i < long.length; i++) {
        if(!dict[long[i]]) {
            dict[long[i]] = 1;
        }
        else {
            dict[long[i]]++;
        }
    }
    console.log(dict);
    for(var j = 0; j < short.length; j++) {
        if(short[j] in dict && dict[short[j]] != 0) {
            res.push(short[j]);
            dict[short[j]]--;
        }
    }
    return res;
};

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([1,2], [2,1]));
console.log(intersect([1,2], [1,1]));