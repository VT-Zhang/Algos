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

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function(nums) {
//     nums.sort(function (a, b) {
//         return a - b;
//     });
//     var res = [[]];
//     var length = Math.pow(2, nums.length);
//     for(var i = 0; i < nums.length; i++) {
//         for(var j = 0; j < length; j++) {
//             if((j >> i) & 1) {
//                 if(!res[j]) {
//                     res[j] = [];
//                 }
//                 res[j].push(nums[i]);
//             }
//         }
//     }
//     return res;
// };

function subsets(arr) {
    if (arr.length === 0 || arr === null) {
        return [];
    }
    let res = [[]];
    arr.forEach( function (n) {
        let length = res.length;
        let i = 0;
        while (i < length) {
            let subset = res[i].slice(0);
            subset.push(n);
            res.push(subset);
            i++;
        }
    });
    return res;
}

console.log(subsets([2,1,3]));
