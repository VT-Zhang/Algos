// Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
//
//     The same repeated number may be chosen from C unlimited number of times.
//
//     Note:
// All numbers (including target) will be positive integers.
//     The solution set must not contain duplicate combinations.
//     For example, given candidate set [2, 3, 6, 7] and target 7,
//     A solution set is:
//     [
//         [7],
//         [2, 2, 3]
//     ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var res = [];
    for(var i = 0; i < candidates.length; i++) {
        if(candidates[i] == target) {
            res.push([target]);
        }
        var arr = [];
        var sum = 0;
        while(sum <= target) {
            sum += candidates[i];
        }
        if(sum == target) {

        }
    }
    console.log(res);
};

console.log(combinationSum([2,3,6,7], 6));