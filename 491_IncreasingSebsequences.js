// Given an integer array, your task is to find all the different possible increasing subsequences of the given array,
//     and the length of an increasing subsequence should be at least 2 .
//
//     Example:
// Input: [4, 6, 7, 7]
// Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
// Note:
//     The length of the given array will not exceed 15.
// The range of integer in the given array is [-100,100].
//     The given array may contain duplicates, and two equal integers should also be considered as a special case of
// increasing sequence.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums) {
    let res = [];
    if (!nums || nums.length === 0) {
        return res;
    }
    let map = {};
    helper(nums, 0, [], map);
    for (let key in map) {
        res.push(map[key]);
    }
    return res;
}

function helper(nums, index, holder, res) {
    if (holder.length >= 2) {
        let key = '';
        holder.forEach(num => {
            key += num + '.';
        });
        res[key] = holder.slice();
    }
    for (let i = index; i < nums.length; i++) {
        if (holder.length === 0 || holder[holder.length - 1] <= nums[i]) {
            holder.push(nums[i]);
            helper(nums, i+1, holder,res);
            holder.pop();
        }
    }
}

console.log(findSubsequences([4,7,6,7]));
