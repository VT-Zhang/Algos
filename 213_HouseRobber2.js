/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    function plan(nums, s, e) {
        let preMax = 0, curMax = 0;
        for (let i = s; i < e; i++) {
            let temp = curMax;
            curMax = Math.max(curMax, preMax + nums[i]);
            preMax = temp;
        }
        return curMax;
    }

    if (nums.length < 1 || nums === null) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    let runner = plan(nums, 0, nums.length - 1);
    let follower = plan(nums, 1, nums.length);
    return Math.max(runner, follower);
}

console.log(rob([2,3,2]));
console.log(rob([1,2,3,1]));

