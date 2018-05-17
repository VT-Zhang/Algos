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
function combinationSum(candidates, target) {
    var temp = [];
    var res = [];
    candidates.sort(function (a, b) {
        return a - b;
    });
    search(0, target);
    return res;

    function search(start, target) {
        if (target < 0 || start === candidates.length) {
            return;
        }
        if (target === 0) {
            return res.push(temp.slice());
        }
        temp.push(candidates[start]);
        search(start, target - candidates[start]);
        temp.pop();
        search(start + 1, target);
    }
}

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));