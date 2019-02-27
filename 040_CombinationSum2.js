/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
    let res = [];
    if (candidates.length === 0) {
        return res;
    }
    candidates.sort((a, b) => a - b);
    backTrack(candidates, target, [], 0);
    return res;

    function backTrack(nums, target, p, start) {
        if (target === 0) {
            return res.push(p.slice());
        }
        for (let i = start; i < nums.length && target >= nums[i]; i++) {
            if (i !== start && nums[i] === nums[i-1]) {
                continue;
            }
            p.push(nums[i]);
            backTrack(nums, target - nums[i], p, i + 1);
            p.pop();
        }
        return;
    }
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
console.log(combinationSum2([2,5,2,1,2], 5));

