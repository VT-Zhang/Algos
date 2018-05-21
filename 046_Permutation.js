//
// Given a collection of distinct integers, return all possible permutations.
//
//     Example:
//
// Input: [1,2,3]
// Output:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    var used = [];
    var res = [];
    helper(nums, [], res, used);
    return res;
}

function helper(nums, arr, res, used) {
    if (arr.length === nums.length) {
        res.push(arr.slice(0));
        return;
    }
    for (var i = 0; i < nums.length; i++) {
        if (!used[i]) {
            used[i] = true;
            arr.push(nums[i]);
            helper(nums, arr, res, used);
            used[i] = false;
            arr.pop();
        }
    }
}

console.log(permute([1,2,3]));
